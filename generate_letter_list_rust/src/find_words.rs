use crate::direction_function_map::{DIRECTIONS, DIRECTION_FUNCTION_MAP};
use crate::structs::{Grid, Letter};
use crate::std_ext::{convert_chain_to_string};
use std::collections::HashSet;
use radix_trie::Trie;

pub(crate) fn find_words(letter_list: &Vec<char>, dictionary: &HashSet<String>, trie: &Trie<String, ()>) -> Vec<String> {
    let grid: Grid = Grid::new(letter_list.clone());
    let mut found_words: Vec<String> = vec![];

    for row in grid.iter() {
        for starting_letter in row.iter() {
            for direction in DIRECTIONS.iter() {
                recursively_find_words(
                    &mut vec![starting_letter.clone()],
                    &mut found_words,
                    direction,
                    &grid,
                    dictionary,
                    trie
                )
            }
        }
    }

    found_words
}

fn recursively_find_words(
    mut current_chain: &mut Vec<Letter>,
    found_words: &mut Vec<String>,
    direction: &str,
    grid: &Grid,
    dictionary: &HashSet<String>,
    trie: &Trie<String, ()>
) {
    let current_letter: &Letter = current_chain.last().unwrap();
    let optional_next_letter: Option<Letter> = (DIRECTION_FUNCTION_MAP[direction].function)(&current_letter.location, grid);
    if optional_next_letter.is_some() {
        let next_letter: Letter = optional_next_letter.unwrap();
        if !current_chain.contains(&next_letter) {
            current_chain.push(next_letter.clone());
            let current_chain_as_string = convert_chain_to_string(&current_chain);

            if trie.get(&current_chain_as_string).is_some() {
                if current_chain_as_string.len() > 2 && dictionary.contains(&current_chain_as_string) {
                    if !found_words.contains(&current_chain_as_string) {
                        found_words.push(current_chain_as_string.clone())
                    }
                }

                for new_direction in DIRECTIONS.iter() {
                    recursively_find_words(&mut current_chain, found_words, new_direction, grid, dictionary, trie)
                }
            }

            current_chain.pop();
        }
    }

}


#[cfg(test)]
mod find_words_tests {
    use crate::find_words::find_words;
    use std::panic;
    use std::collections::HashSet;
    use radix_trie::Trie;
    use crate::read_dictionary_from_file;
    use std::iter::FromIterator;
    use crate::std_ext::get_prefixes;

    fn setup() -> (HashSet<String>, Trie<String, ()>) {
        let dictionary = read_dictionary_from_file("src/test_words.json").unwrap().words;
        let mut trie: Trie<String, ()> = Trie::from_iter(dictionary.iter().map(|x| (x.clone(), ())));
        for word in dictionary.iter() {
            for prefix in get_prefixes(word) {
                trie.insert(prefix, ());
            }
        }
        (
            dictionary,
            trie
        )
    }

    #[test]
    fn run_tests_with_setup() {
        let (dictionary, trie) = setup();
        finds_no_words_in_a_letter_list_that_contains_no_words(&dictionary, &trie);
        test_finds_a_horizontal_word(&dictionary, &trie);
        test_finds_a_vertical_word(&dictionary, &trie)
    }

    fn finds_no_words_in_a_letter_list_that_contains_no_words(dictionary: &HashSet<String>, trie: &Trie<String, ()>) {
        let letter_list: Vec<char> = vec!['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let expected: Vec<&str> = vec![];
        assert_eq!(find_words(&letter_list, dictionary, trie), expected)
    }

    fn test_finds_a_horizontal_word(dictionary: &HashSet<String>, trie: &Trie<String, ()>) {
        let letter_list: Vec<char> = vec!['J', 'A', 'Z', 'Z', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let expected: Vec<&str> = vec!["jazz", "zax"];
        assert_eq!(find_words(&letter_list, dictionary, trie), expected)
    }

    fn test_finds_a_vertical_word(dictionary: &HashSet<String>, trie: &Trie<String, ()>) {
        let letter_list: Vec<char> = vec!['J', 'X', 'X', 'X', 'A', 'X', 'X', 'X', 'Z', 'X', 'X', 'X', 'Z', 'X', 'X', 'X'];
        let expected: Vec<&str> = vec!["jazz", "zax"];
        assert_eq!(find_words(&letter_list, dictionary, trie), expected)
    }
}
