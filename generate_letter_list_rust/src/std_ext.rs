use crate::structs::Letter;

#[cfg(test)]
pub(crate) fn capitalise(character: &char) ->  char {
    character.to_uppercase().nth(0).unwrap()
}

pub(crate) fn lowercase(character: char) ->  char {
    character.to_lowercase().nth(0).unwrap()
}

pub(crate) fn is_letter_in_chain(chain: &Vec<Letter>, next_letter: &Letter) -> bool {
    for letter in chain.iter() {
        if letter == next_letter { return true }
    };
    false
}

#[cfg(test)]
mod is_letter_in_chain_tests {
    use crate::structs::{Letter, Location};
    use crate::std_ext::is_letter_in_chain;

    #[test]
    fn returns_false_if_letter_is_not_in_chain() {
        let letter1: Letter = Letter{ character: 'a', location: Location { x: 0, y: 0 } };
        let letter2: Letter = Letter{ character: 'b', location: Location { x: 1, y: 0 } };
        let letter3: Letter = Letter{ character: 'c', location: Location { x: 2, y: 0 } };
        let chain: Vec<Letter> = vec![letter1, letter2];

        assert_eq!(false, is_letter_in_chain(&chain, &letter3))
    }

    #[test]
    fn returns_true_if_letter_is_in_chain() {
        let letter1: Letter = Letter{ character: 'a', location: Location { x: 0, y: 0 } };
        let letter2: Letter = Letter{ character: 'b', location: Location { x: 1, y: 0 } };
        let letter2_2: Letter = Letter{ character: 'b', location: Location { x: 1, y: 0 } };
        let chain: Vec<Letter> = vec![letter1, letter2];

        assert_eq!(true, is_letter_in_chain(&chain, &letter2_2))
    }
}