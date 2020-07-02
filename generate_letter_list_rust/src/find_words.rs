use crate::direction_function_map::{DIRECTIONS, DIRECTION_FUNCTION_MAP};
use crate::find_possible_words::find_possible_words;
use crate::structs::{Grid, Letter};
use crate::std_ext::{is_letter_in_chain, convert_chain_to_string, is_string_in_vec};

pub(crate) fn find_words(letter_list: &Vec<char>, dictionary: Vec<String>) -> Vec<String> {
    let grid: Grid = Grid::new(letter_list.clone());
    let mut found_words: Vec<String> = vec![];

    for row in grid.iter() {
        for starting_letter in row.iter() {
            for direction in DIRECTIONS.iter() {
                let possible_words: Vec<String> = find_possible_words(&starting_letter.character.to_string(), &dictionary);
                recursively_find_words(&mut vec![starting_letter.clone()], &mut found_words, &possible_words, direction, &grid)
            }
        }
    }

    found_words
}

fn recursively_find_words(
    mut current_chain: &mut Vec<Letter>,
    found_words: &mut Vec<String>,
    possible_words: &Vec<String>,
    direction: &str,
    grid: &Grid,
) {
    let current_letter: &Letter = current_chain.last().unwrap();
    let optional_next_letter: Option<Letter> = (DIRECTION_FUNCTION_MAP[direction].function)(&current_letter.location, grid);
    if optional_next_letter.is_some() {
        let next_letter: Letter = optional_next_letter.unwrap();
        if !is_letter_in_chain(&current_chain, &next_letter) {
            current_chain.push(next_letter.clone());
            let current_chain_as_string = convert_chain_to_string(&current_chain);
            let new_possible_words = find_possible_words(&current_chain_as_string, possible_words);

            if new_possible_words.len() > 0 {
                if current_chain_as_string.len() > 2 && is_string_in_vec(&new_possible_words, &current_chain_as_string) {
                    if !is_string_in_vec(found_words, &current_chain_as_string) {
                        found_words.push(current_chain_as_string.clone())
                    }
                }

                for direction in DIRECTIONS.iter() {
                    recursively_find_words(&mut current_chain, found_words, &new_possible_words, direction, grid)
                }
            }
        }
    }

}


#[cfg(test)]
mod find_words_tests {
    use crate::find_words::find_words;

    #[test]
    fn finds_no_words_in_a_letter_list_that_contains_no_words() {
        let letter_list: Vec<char> = vec!['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let dictionary: Vec<String> = vec!["one".to_string(), "two".to_string(), "three".to_string()];
        let expected: Vec<&str> = vec![];
        assert_eq!(expected, find_words(&letter_list, dictionary))
    }

    #[test]
    fn test_finds_a_horizontal_word() {
        let letter_list: Vec<char> = vec!['J', 'A', 'Z', 'Z', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let dictionary: Vec<String> = vec!["jazz".to_string(), "zax".to_string()];
        let expected: Vec<&str> = vec!["jazz", "zax"];
        assert_eq!(expected, find_words(&letter_list, dictionary))
    }
}
