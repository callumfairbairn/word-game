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

lazy_static! { pub (crate) static ref DICTIONARY: HashSet<String> = read_dictionary_from_file("../src/words.json").unwrap().words; }

lazy_static! { pub (crate) static ref TRIE: Trie<String, ()> = Trie::from_iter(DICTIONARY.iter().map(|x| (x.clone(), ()))); }

fn main() {
    let letter_list = generate_letter_list();
    let found_words = find_words(&letter_list);

    println!("{} {} {} {}", letter_list[0], letter_list[1], letter_list[2], letter_list[3]);
    println!("{} {} {} {}", letter_list[4], letter_list[5], letter_list[6], letter_list[7]);
    println!("{} {} {} {}", letter_list[8], letter_list[9], letter_list[10], letter_list[11]);
    println!("{} {} {} {}", letter_list[12], letter_list[13], letter_list[14], letter_list[15]);
    println!("{:?}", found_words);

}
