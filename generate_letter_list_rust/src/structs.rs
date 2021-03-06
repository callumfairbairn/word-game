use std::slice::Iter;
use crate::constants::{X_DIM, Y_DIM};
use crate::std_ext::lowercase;
use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use std::sync::Arc;
use parking_lot::RwLock;

#[derive(Deserialize, Debug)]
pub(crate) struct Dictionary {
    pub words: HashSet<String>,
}

#[derive(Serialize)]
pub struct CombinedResult {
    pub letter_list: Vec<char>,
    pub found_words: Vec<String>,
}

#[derive(Clone)]
pub struct LettersAndWords {
    pub letter_list: Arc<RwLock<Vec<char>>>,
    pub found_words: Arc<RwLock<Vec<String>>>

}

impl LettersAndWords {
    pub fn new() -> Self {
        LettersAndWords {
            letter_list: Arc::new(RwLock::new(Vec::new())),
            found_words: Arc::new(RwLock::new(Vec::new())),
        }
    }
}

#[derive(Clone)]
pub(crate) struct Callback{
    pub function: fn(&Location, &Grid) -> Option<Letter>
}

#[derive(Eq, Ord, PartialOrd, PartialEq, Clone)]
pub(crate) struct Location {
    pub(crate) x: i32,
    pub(crate) y: i32
}

#[derive(Eq, Ord, PartialOrd, PartialEq, Clone)]
pub(crate) struct Letter {
    pub(crate) character: char,
    pub(crate) location: Location
}

impl std::fmt::Debug for Letter {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{}, ({}, {})", self.character, self.location.x, self.location.y)
    }
}

#[derive(Eq, Ord, PartialOrd, PartialEq, Clone, Debug)]
pub(crate) struct Grid(Vec<Vec<Letter>>);

impl Grid {
    pub fn new(letter_list: Vec<char>) -> Grid {
        Grid(c![c![Letter{ character: lowercase(letter_list[(x * 4 + y ) as usize]), location: Location { x: x, y: y }}, for x in 0..X_DIM], for y in 0..Y_DIM])
    }

    pub fn len(&self) -> usize {
        let Grid(vec) = self;
        vec.len()
    }

    pub fn iter(&self) -> Iter<'_, Vec<Letter>> {
        let Grid(vec) = self;
        vec.iter()
    }
}

impl std::ops::Index<usize> for Grid {
    type Output = Vec<Letter>;
    fn index(&self, i: usize) -> &Vec<Letter> {
        let Grid(vec) = self;
        &vec[i]
    }
}

#[cfg(test)]
mod grid_tests {
    use crate::structs::{Grid, Letter, Location};

    #[test]
    fn creates_grid_based_on_input_letter_list() {
        let letter_list: Vec<char> = vec!['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let expected: Grid = Grid(vec![
            vec![
                Letter{ character: 'x', location: Location{ x: 0, y: 0 }},
                Letter{ character: 'x', location: Location{ x: 1, y: 0 }},
                Letter{ character: 'x', location: Location{ x: 2, y: 0 }},
                Letter{ character: 'x', location: Location{ x: 3, y: 0 }}
            ],
            vec![
                Letter{ character: 'x', location: Location{ x: 0, y: 1 }},
                Letter{ character: 'x', location: Location{ x: 1, y: 1 }},
                Letter{ character: 'x', location: Location{ x: 2, y: 1 }},
                Letter{ character: 'x', location: Location{ x: 3, y: 1 }}
            ],
            vec![
                Letter{ character: 'x', location: Location{ x: 0, y: 2 }},
                Letter{ character: 'x', location: Location{ x: 1, y: 2 }},
                Letter{ character: 'x', location: Location{ x: 2, y: 2 }},
                Letter{ character: 'x', location: Location{ x: 3, y: 2 }}
            ],
            vec![
                Letter{ character: 'x', location: Location{ x: 0, y: 3 }},
                Letter{ character: 'x', location: Location{ x: 1, y: 3 }},
                Letter{ character: 'x', location: Location{ x: 2, y: 3 }},
                Letter{ character: 'x', location: Location{ x: 3, y: 3 }}
            ]
        ]);
        assert_eq!(expected, Grid::new(letter_list))
    }
}
