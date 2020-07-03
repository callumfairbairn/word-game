use crate::structs::Letter;

#[cfg(test)]
pub(crate) fn capitalise(character: &char) ->  char {
    character.to_uppercase().nth(0).unwrap()
}

pub(crate) fn lowercase(character: char) ->  char {
    character.to_lowercase().nth(0).unwrap()
}

pub(crate) fn convert_chain_to_string(chain: &Vec<Letter>) -> String {
    chain.iter().map(|letter| letter.character.to_string()).collect()
}

#[cfg(test)]
mod convert_chain_to_string_tests {
    use crate::structs::{Letter, Location};
    use crate::std_ext::convert_chain_to_string;

    #[test]
    fn returns_empty_string_for_empty_chain() {
        let chain: Vec<Letter> = vec![];

        assert_eq!("".to_string(), convert_chain_to_string(&chain))
    }

    #[test]
    fn returns_a_letter_as_a_string_for_a_chain_with_one_element() {
        let letter1: Letter = Letter{ character: 'a', location: Location { x: 0, y: 0 } };
        let chain: Vec<Letter> = vec![letter1];

        assert_eq!("a".to_string(), convert_chain_to_string(&chain))
    }

    #[test]
    fn returns_multiple_letters_as_a_string() {
        let letter1: Letter = Letter{ character: 'a', location: Location { x: 0, y: 0 } };
        let letter2: Letter = Letter{ character: 'b', location: Location { x: 1, y: 0 } };
        let chain: Vec<Letter> = vec![letter1, letter2];

        assert_eq!("ab".to_string(), convert_chain_to_string(&chain))
    }
}