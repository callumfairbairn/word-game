mod trie;
mod structs;
mod direction_function_map;
mod std_ext;
mod generate;
mod find_words;
pub mod constants;

extern crate serde_json;
#[macro_use(c)]
extern crate cute;
#[macro_use]
extern crate lazy_static;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate bincode;

use std::error::Error;
use std::fs::File;
use std::io::BufReader;
use std::path::Path;
use std::collections::{HashSet};
use std::fs;
use warp::{http, Filter};
use crate::generate::generate_letter_list;
use crate::find_words::find_words;
use crate::std_ext::get_prefixes;
use crate::structs::{Dictionary, CombinedResult, LettersAndWords};
use crate::trie::Trie;
use std::time::Instant;
use crate::constants::{MAXIMUM_GENERATION_TIME, MINIMUM_NUMBER_OF_FOUND_WORDS, MINIMUM_NUMBER_OF_FOUND_WORDS_INITIAL};
use std::sync::Arc;

fn read_dictionary_from_file<P: AsRef<Path>>(path: P) -> Result<Dictionary, Box<dyn Error>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    let dict = serde_json::from_reader(reader)?;
    Ok(dict)
}

fn setup(path_to_dict: &str, path_to_trie: &str) -> (Arc<HashSet<String>>, Arc<Trie<()>>) {
    let dictionary;
    let mut trie;
    if fs::metadata(path_to_dict).is_ok() {
        println!("Dictionary found, reading in...");
        dictionary = read_dictionary_from_file(path_to_dict).unwrap().words;
    } else {
        println!("Dictionary not found, panicking...");
        panic!()
    }

    if fs::metadata(path_to_trie).is_ok() {
        println!("Trie found, reading in...");
        trie = crate::Trie::load_from_file(path_to_trie).expect("Couldn't load trie from file");
    } else {
        println!("Trie not found, creating from dictionary...");
        trie = crate::Trie::default();
        for word in dictionary.iter() {
            trie.insert(&word, ());
            for prefix in get_prefixes(word) {
                trie.insert(&prefix, ());
            }
        }
        trie.save_to_file(path_to_trie).expect("Couldn't save trie to file");
    }
    (Arc::new(dictionary), Arc::new(trie))
}

fn update_letter_list_and_words(
    dictionary: Arc<HashSet<String>>,
    trie: Arc<Trie<()>>,
    letters_and_words: LettersAndWords,
    initial: bool
) -> () {
    println!("Generating new letter list...");
    let mut letter_list = generate_letter_list();
    let mut found_words = find_words(&letter_list, &dictionary, &trie);
    let mut longest_list: Vec<char> = vec![];
    let mut longest_list_found_words: Vec<String> = vec![];
    let min_number_of_words = if initial {
        MINIMUM_NUMBER_OF_FOUND_WORDS_INITIAL as usize
    } else {
        MINIMUM_NUMBER_OF_FOUND_WORDS as usize
    };
    let start_time = Instant::now();


    while found_words.len() < min_number_of_words {
        if start_time.elapsed().as_secs() > MAXIMUM_GENERATION_TIME as u64 {
            println!("Maximum generation time exceeded, updating with {} found words...", longest_list_found_words.len());
            letters_and_words.letter_list.write().resize(longest_list.len(), 'a');
            letters_and_words.letter_list.write().swap_with_slice(&mut longest_list);
            letters_and_words.found_words.write().resize(longest_list_found_words.len(), "".to_string());
            letters_and_words.found_words.write().swap_with_slice(&mut longest_list_found_words);
            return ()
        }

        letter_list = generate_letter_list();
        found_words = find_words(&letter_list, &dictionary, &trie);

        if found_words.len() > longest_list_found_words.len() {
            longest_list = letter_list.clone();
            longest_list_found_words = found_words.clone();
        }
    };

    println!("Found list containing {} words", found_words.len());
    letters_and_words.letter_list.write().resize(letter_list.len(), 'a');
    letters_and_words.letter_list.write().swap_with_slice(&mut letter_list);
    letters_and_words.found_words.write().resize(found_words.len(), "".to_string());
    letters_and_words.found_words.write().swap_with_slice(&mut found_words);
}

async fn async_update_letter_list_and_words(
    dictionary: Arc<HashSet<String>>,
    trie: Arc<Trie<()>>,
    letters_and_words: LettersAndWords
) -> Result<impl warp::Reply, warp::Rejection> {
    println!("Update request recieved...");
    update_letter_list_and_words(dictionary, trie, letters_and_words, false);
    println!("Updated letter list and found words");
    Ok(warp::reply::with_status("Updated letter list and found words", http::StatusCode::CREATED))
}

async fn get_letter_list_and_words(
    letters_and_words: LettersAndWords
) -> Result<impl warp::Reply, warp::Rejection> {
    println!("Get request recieved...");
    println!("Posting result...");
    
    Ok(warp::reply::json(&CombinedResult{ letter_list: letters_and_words.letter_list.read().to_vec(), found_words: letters_and_words.found_words.read().to_vec() }))
}

#[tokio::main]
async fn main() {
    let (dictionary, trie) = setup("src/words.json", "src/trie.bin");
    let letters_and_words = LettersAndWords::new();
    update_letter_list_and_words(Arc::clone(&dictionary), Arc::clone(&trie), letters_and_words.clone(), true);

    let dictionary_filter = warp::any().map(move || Arc::clone(&dictionary));
    let trie_filter = warp::any().map(move || Arc::clone(&trie));
    let letters_and_words_filter = warp::any().map(move || letters_and_words.clone());

    let update = warp::get()
        .and(warp::path("update"))
        .and(dictionary_filter.clone())
        .and(trie_filter.clone())
        .and(letters_and_words_filter.clone())
        .and_then(async_update_letter_list_and_words);

    let get = warp::get()
        .and(letters_and_words_filter.clone())
        .and_then(get_letter_list_and_words);

    let routes = update.or(get)
        .with(warp::reply::with::header(
        "Access-Control-Allow-Headers", "Content-Type, Accept"))
        .with(warp::reply::with::header(
            "Access-Control-Allow-Origin", "*"));

    println!("Ready to receive signal...");

    warp::serve(routes)
        .run(([0, 0, 0, 0], 8080))
        .await;
}
