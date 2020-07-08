use crate::constants::{X_DIM, Y_DIM, ALPHABET, CONSONANTS, VOWELS};
use rand::Rng;
use std::collections::HashSet;
use std::iter::FromIterator;
use rand::rngs::ThreadRng;

fn random_letter(mut rng: ThreadRng) -> char {
    ALPHABET[rng.gen_range(0, 26) as usize]
}

fn random_vowel(mut rng: ThreadRng) -> char {
    VOWELS[rng.gen_range(0, 5) as usize]
}

pub(crate) fn generate_letter_list() -> Vec<char> {
    let vowels_hash_set: HashSet<char> = HashSet::from_iter(VOWELS.iter().cloned());
    let rng = rand::thread_rng();
    let mut letter_list: Vec<char> = vec![];

    for i in 0..(X_DIM * Y_DIM) {
        if letter_list.len() == 0 {
            letter_list.push(random_letter(rng));
        } else {
            let letter = random_letter(rng);
            if CONSONANTS.contains(&letter) {
                let neighbors = get_neighbors(letter_list.clone(), i);
                let neighbors_hash_set: HashSet<char> = HashSet::from_iter(neighbors.iter().cloned());
                let intersection: HashSet<&char> = HashSet::from_iter(neighbors_hash_set.intersection(&vowels_hash_set));
                if intersection.len() > 0 {
                    letter_list.push(letter);
                } else {
                    letter_list.push(random_vowel(rng))
                }
            } else {
                letter_list.push(letter);
            }
        }
    };
    letter_list
}

pub (crate) fn get_neighbors(letter_list: Vec<char>, location: i32) -> Vec<char> {
    let mut neighbors: Vec<char> = vec![];

    let right = if is_not_on_right_edge(location) {
        letter_list.get((location + 1) as usize)
    } else { None };

    let down_right = if is_not_on_right_edge(location) && is_not_on_bottom_edge(location) {
        letter_list.get((location + 5) as usize)
    } else { None };

    let down = if is_not_on_bottom_edge(location) {
        letter_list.get((location + 4) as usize)
    } else { None };

    let down_left = if is_not_on_bottom_edge(location) && is_not_on_left_edge(location) {
        letter_list.get((location + 3) as usize)
    } else { None };

    let left = if is_not_on_left_edge(location) {
        letter_list.get((location - 1) as usize)
    } else { None };

    let up_left = if is_not_on_left_edge(location) && is_not_on_top_edge(location) {
        letter_list.get((location - 5) as usize)
    } else { None };

    let up = if is_not_on_top_edge(location) {
        letter_list.get((location - 4) as usize)
    } else { None };

    let up_right = if is_not_on_top_edge(location) && is_not_on_right_edge(location) {
        letter_list.get((location - 3) as usize)
    } else { None };

    if right.is_some() { neighbors.push(right.unwrap().clone()) }
    if down_right.is_some() { neighbors.push(down_right.unwrap().clone()) }
    if down.is_some() { neighbors.push(down.unwrap().clone()) }
    if down_left.is_some() { neighbors.push(down_left.unwrap().clone()) }
    if left.is_some() { neighbors.push(left.unwrap().clone()) }
    if up_left.is_some() { neighbors.push(up_left.unwrap().clone()) }
    if up.is_some() { neighbors.push(up.unwrap().clone()) }
    if up_right.is_some() { neighbors.push(up_right.unwrap().clone()) }

    neighbors
}

fn is_not_on_left_edge(location: i32) -> bool {
    location % 4 != 0
}

fn is_not_on_right_edge(location: i32) -> bool {
    location % 4 < (location + 1) % 4
}

fn is_not_on_top_edge(location: i32) -> bool {
    location > 3
}

fn is_not_on_bottom_edge(location: i32) -> bool {
    location < 12
}

#[cfg(test)]
mod get_neighbors_tests {
    use crate::generate::{get_neighbors};

    #[test]
    fn returns_empty_vec_when_vec_contains_one_element() {
        let letter_list = vec!['A'];
        let location = 0;
        let mut expected: Vec<char> = vec![];
        assert_eq!(get_neighbors(letter_list, location).sort(), expected.sort())
    }

    #[test]
    fn returns_neighbor_when_vec_contains_two_element() {
        let letter_list = vec!['A', 'B'];
        let location = 1;
        let mut expected: Vec<char> = vec!['A'];
        assert_eq!(get_neighbors(letter_list, location).sort(), expected.sort())
    }

    #[test]
    fn returns_neighbors_when_vec_contains_three_element() {
        let letter_list = vec!['A', 'B', 'C'];
        let location = 1;
        let mut expected: Vec<char> = vec!['A', 'C'];
        assert_eq!(get_neighbors(letter_list, location).sort(), expected.sort())
    }

    #[test]
    fn returns_neighbors_when_vec_contains_sixteen_element() {
        let letter_list = vec!['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
        let location = 5;
        let mut expected: Vec<char> = vec!['A', 'B', 'C', 'E', 'G', 'I', 'J', 'K'];
        assert_eq!(get_neighbors(letter_list, location).sort(), expected.sort())
    }
}

#[cfg(test)]
mod generate_letter_list_tests {
    use crate::generate::{generate_letter_list, get_neighbors};
    use crate::constants::{X_DIM, Y_DIM, DEFAULT_LETTERS, VOWELS, CONSONANTS};
    use crate::std_ext::capitalise;
    use std::collections::HashSet;
    use std::iter::FromIterator;

    #[test]
    fn returns_a_vec_of_size_x_dim_times_y_dim() {
        assert_eq!((X_DIM * Y_DIM) as usize, generate_letter_list().len());
    }

    #[test]
    fn characters_are_uppercase() {
        let letter_list = generate_letter_list();

        for letter in letter_list.iter() {
            assert_eq!(*letter, capitalise(letter))
        }
    }

    #[test]
    fn characters_are_random() {
        assert_ne!(DEFAULT_LETTERS.to_vec(), generate_letter_list());
        assert_ne!(vec!['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'], generate_letter_list())
    }

    #[test]
    fn every_consonant_is_next_to_a_vowel() {
        let vowels_hash_set: HashSet<char> = HashSet::from_iter(VOWELS.iter().cloned());
        for _ in 0..100 {
            let letter_list = generate_letter_list();
            for (i, character) in letter_list.iter().enumerate() {
                if CONSONANTS.contains(character) {
                    let neighbors = get_neighbors(letter_list.clone(), i as i32);
                    let neighbors_hash_set: HashSet<char> = HashSet::from_iter(neighbors.iter().cloned());
                    let intersection: HashSet<&char> = HashSet::from_iter(neighbors_hash_set.intersection(&vowels_hash_set));
                    assert!(intersection.len() > 0)
                }
            }
        }
    }
}

