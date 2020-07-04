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

use serde::Deserialize;

use std::error::Error;
use std::fs::File;
use std::io::BufReader;
use std::path::Path;
use crate::generate::generate_letter_list;
use crate::find_words::find_words;
use radix_trie::Trie;
use std::iter::FromIterator;
use std::collections::HashSet;
use crate::std_ext::get_prefixes;

#[derive(Deserialize, Debug)]
struct Dictionary {
    words: HashSet<String>,
}

fn read_dictionary_from_file<P: AsRef<Path>>(path: P) -> Result<Dictionary, Box<dyn Error>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    let dict = serde_json::from_reader(reader)?;
    Ok(dict)
}

fn main() {
    let dictionary = read_dictionary_from_file("../src/words.json").unwrap().words;
    let mut trie: Trie<String, ()> = Trie::from_iter(dictionary.iter().map(|x| (x.clone(), ())));
    for word in dictionary.iter() {
        for prefix in get_prefixes(word) {
            trie.insert(prefix, ());
        }
    }

    let mut letter_list = generate_letter_list();
    let mut found_words = find_words(&letter_list, &dictionary, &trie);

    while found_words.len() < 200 {
        println!("{:?}", found_words);
        println!("{}", found_words.len());
        letter_list = generate_letter_list();
        found_words = find_words(&letter_list, &dictionary, &trie);
    }

    println!("{} {} {} {}", letter_list[0], letter_list[1], letter_list[2], letter_list[3]);
    println!("{} {} {} {}", letter_list[4], letter_list[5], letter_list[6], letter_list[7]);
    println!("{} {} {} {}", letter_list[8], letter_list[9], letter_list[10], letter_list[11]);
    println!("{} {} {} {}", letter_list[12], letter_list[13], letter_list[14], letter_list[15]);
    println!("{:?}", found_words);
    println!("{}", found_words.len())
}
