mod create_grid;
mod std_ext;
mod generate;
mod find_words;
pub mod constants;

#[macro_use(c)]
extern crate cute;
extern crate serde_json;

use serde::Deserialize;

use std::error::Error;
use std::fs::File;
use std::io::BufReader;
use std::path::Path;
use crate::generate::generate_letter_list;

#[derive(Deserialize, Debug)]
struct Dictionary {
    words: Vec<String>,
}

fn read_dictionary_from_file<P: AsRef<Path>>(path: P) -> Result<Dictionary, Box<dyn Error>> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    let dict = serde_json::from_reader(reader)?;
    Ok(dict)
}

fn main() {
    let letter_list = generate_letter_list();
    let dictionary = read_dictionary_from_file("../src/words.json").unwrap();

    println!("{:?}", dictionary);
}
