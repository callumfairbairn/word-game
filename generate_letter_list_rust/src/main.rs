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
use crate::generate::generate_letter_list;
use crate::find_words::find_words;
use std::collections::{HashSet};
use crate::std_ext::get_prefixes;
use crate::structs::Dictionary;
use std::fs;
use warp::Filter;
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

#[derive(Serialize)]
struct CombinedResult {
    letter_list: Vec<char>,
    found_words: Vec<String>,
}

async fn generate_letter_list_and_words(
    dictionary: HashSet<String>,
    trie: Trie<()>
) -> Result<impl warp::Reply, warp::Rejection> {
    println!("Request recieved...");
    let mut letter_list = generate_letter_list();
    let mut found_words = find_words(&letter_list, &dictionary, &trie);

    while found_words.len() < 200 {
        println!("{}", found_words.len());
        letter_list = generate_letter_list();
        found_words = find_words(&letter_list, &dictionary, &trie);
    };

    let combined_result = CombinedResult{ letter_list, found_words };

    println!("Posting result...");
    Ok(warp::reply::json(&combined_result))
}



#[tokio::main]
async fn main() {
    let (dictionary, trie) = setup("../src/words.json", "trie.bin");

    let dictionary_filter = warp::any().map(move || dictionary.clone());
    let trie_filter = warp::any().map(move || trie.clone());

    let get_letter_list_and_words = warp::get()
        .and(dictionary_filter.clone())
        .and(trie_filter.clone())
        .and_then(generate_letter_list_and_words);

    println!("Ready to recieve signal...");

    warp::serve(get_letter_list_and_words)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
