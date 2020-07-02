use crate::direction_function_map::{DIRECTIONS, Callback, get_direction_function_map};
use crate::find_possible_words::find_possible_words;
use std::collections::HashMap;
use crate::structs::{Grid, Letter};
use crate::std_ext::{is_letter_in_chain, convert_chain_to_string};

fn find_words<'a>(letter_list: Vec<char>, dictionary: Vec<String>) -> Vec<&'a str> {
    let direction_function_map: HashMap<&str, Callback> = get_direction_function_map();
    let grid: Grid = Grid::new(letter_list);
    let found_words: Vec<&str> = vec![];

    for row in grid.iter() {
        for starting_letter in row.iter() {
            for direction in DIRECTIONS.iter() {
                let possible_words: Vec<&String> = find_possible_words(&starting_letter.character.to_string()[..], &dictionary);
                recursively_find_words(vec![starting_letter.clone()], &found_words, &possible_words, direction, &grid, &direction_function_map)
            }
        }
    }

    found_words
}

fn recursively_find_words(
    mut current_chain: Vec<Letter>,
    found_words: &Vec<&str>,
    possible_words: &Vec<&String>,
    direction: &str,
    grid: &Grid,
    direction_function_map: &HashMap<&str, Callback>
) {
    let current_letter: &Letter = current_chain.last().unwrap();
    let optional_next_letter: Option<Letter> = direction_function_map[direction](&current_letter.location, grid);
    if optional_next_letter.is_some() {
        let next_letter: Letter = optional_next_letter.unwrap();
        if !is_letter_in_chain(&current_chain, &next_letter) {
            current_chain.push(next_letter.clone());
            let current_chain_as_string = convert_chain_to_string(&current_chain);
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
        assert_eq!(expected, find_words(letter_list, dictionary))
    }

    #[test]
    fn test_finds_a_horizontal_word() {
        let letter_list: Vec<char> = vec!['J', 'A', 'Z', 'Z', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let dictionary: Vec<String> = vec!["jazz".to_string(), "zax".to_string()];
        let expected: Vec<&str> = vec!["jazz", "zax"];
        assert_eq!(expected, find_words(letter_list, dictionary))
    }
}
