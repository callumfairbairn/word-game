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

#[derive(Deserialize, Debug)]
struct Dictionary {
    words: Vec<String>,
}

fn read_words_from_file<P: AsRef<Path>>(path: P) -> Result<Dictionary, Box<dyn Error>> {
    // Open the file in read-only mode with buffer.
    let file = File::open(path)?;
    let reader = BufReader::new(file);

    // Read the JSON contents of the file as an instance of `User`.
    let u = serde_json::from_reader(reader)?;

    // Return the `User`.
    Ok(u)
}

fn main() {
    let u = read_words_from_file("../src/words.json").unwrap();

    println!("{:?}", u);
}
