use std::collections::HashMap;

pub(crate) const X_DIM: i32 = 4;
pub(crate) const Y_DIM: i32 = 4;
pub(crate) const MAXIMUM_GENERATION_TIME: i32 = 120;
pub(crate) const MINIMUM_NUMBER_OF_FOUND_WORDS: i32 = 400;
pub(crate) const MINIMUM_NUMBER_OF_FOUND_WORDS_INITIAL: i32 = 300;

#[cfg(test)]
pub(crate) const DEFAULT_LETTERS: [char; 16] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

pub(crate) const VOWELS: [char; 5] = ['A', 'E', 'I', 'O', 'U'];
pub(crate) const CONSONANTS: [char; 21] = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

pub const VOWEL_CHANCE: i32 = 10;

pub (crate) fn get_weighted_vowels() -> HashMap<char, i32> {
    let mut weighted_vowels: HashMap<char, i32> = HashMap::new();
    weighted_vowels.insert('A', 22);
    weighted_vowels.insert('E', 29);
    weighted_vowels.insert('I', 20);
    weighted_vowels.insert('O', 19);
    weighted_vowels.insert('U', 10);
    weighted_vowels
}

pub (crate) fn get_weighted_consonants() -> HashMap<char, i32> {
    let mut weighted_consonants: HashMap<char, i32> = HashMap::new();
        weighted_consonants.insert('B', 6);
        weighted_consonants.insert('C', 7);
        weighted_consonants.insert('F', 5);
        weighted_consonants.insert('G', 5);
        weighted_consonants.insert('H', 6);
        weighted_consonants.insert('J', 2);
        weighted_consonants.insert('K', 4);
        weighted_consonants.insert('L', 9);
        weighted_consonants.insert('M', 7);
        weighted_consonants.insert('N', 9);
        weighted_consonants.insert('P', 7);
        weighted_consonants.insert('Q', 2);
        weighted_consonants.insert('R', 10);
        weighted_consonants.insert('S', 11);
        weighted_consonants.insert('T', 10);
        weighted_consonants.insert('V', 2);
        weighted_consonants.insert('W', 2);
        weighted_consonants.insert('X', 2);
        weighted_consonants.insert('Y', 2);
        weighted_consonants.insert('Z', 2);
    weighted_consonants
}
