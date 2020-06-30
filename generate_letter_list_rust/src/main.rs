mod std_ext;
mod generate;
pub mod constants;

#[macro_use(c)]
extern crate cute;

use crate::constants::X_DIM;
use crate::constants::Y_DIM;

fn main() {
    println!("{}, {}", X_DIM, Y_DIM);
}
