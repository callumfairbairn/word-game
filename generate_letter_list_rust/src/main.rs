#![feature(box_patterns)]

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

fn read_dictionary_from_file<P: AsRef<Path>>(path: P) -> Result<Dictionary, Box<dyn Error>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    let dict = serde_json::from_reader(reader)?;
    Ok(dict)
}

fn setup(path_to_dict: &str, path_to_trie: &str) -> (HashSet<String>, Trie<()>) {
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
    (dictionary, trie)
}

fn update_letter_list_and_words(
    dictionary: HashSet<String>,
    trie: Trie<()>,
    letters_and_words: LettersAndWords
) -> () {
    let mut letter_list = generate_letter_list();
    let mut found_words = find_words(&letter_list, &dictionary, &trie);

    while found_words.len() < 200 {
        println!("{}", found_words.len());
        letter_list = generate_letter_list();
        found_words = find_words(&letter_list, &dictionary, &trie);
    };

    letters_and_words.letter_list.write().resize(letter_list.len(), 'a');
    letters_and_words.letter_list.write().swap_with_slice(&mut letter_list);
    letters_and_words.found_words.write().resize(found_words.len(), "".to_string());
    letters_and_words.found_words.write().swap_with_slice(&mut found_words);
}

async fn async_update_letter_list_and_words(
    dictionary: HashSet<String>,
    trie: Trie<()>,
    letters_and_words: LettersAndWords
) -> Result<impl warp::Reply, warp::Rejection> {
    println!("Update request recieved...");
    update_letter_list_and_words(dictionary, trie, letters_and_words);
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
    let (dictionary, trie) = setup("../src/words.json", "trie.bin");
    let letters_and_words = LettersAndWords::new();
    update_letter_list_and_words(dictionary.clone(), trie.clone(), letters_and_words.clone());

    let dictionary_filter = warp::any().map(move || dictionary.clone());
    let trie_filter = warp::any().map(move || trie.clone());
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
        .run(([127, 0, 0, 1], 3030))
        .await;
}
