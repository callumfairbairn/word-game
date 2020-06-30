mod std_ext;
mod generate;
mod find_words;
pub mod constants;

#[macro_use(c)]
extern crate cute;

fn main() {
    println!("{:?}", generate::generate_letter_list());
}
