#[derive(Eq, Ord, PartialOrd, PartialEq)]
struct Location {
    x: i32,
    y: i32
}

#[derive(Eq, Ord, PartialOrd, PartialEq)]
struct Letter {
    character: char,
    location: Location
}

impl std::fmt::Debug for Letter {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{}, ({}, {})", self.character, self.location.x, self.location.y)
    }
}

fn create_grid(letter_list: Vec<char>) -> Vec<Vec<Letter>> {
    c![c![Letter{ character: lowercase(&letter_list[(x * 4 + y ) as usize]), location: Location { x: x, y: y }}, for x in 0..X_DIM], for y in 0..Y_DIM]
}

#[cfg(test)]
mod create_grid_tests {
    use crate::create_grid::{Letter, Location, create_grid};

    #[test]
    fn returns_grid_based_on_input_letter_list() {
        let letter_list: Vec<char> = vec!['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
        let expected: Vec<Vec<Letter>> = vec![
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
        ];
        assert_eq!(expected, create_grid(letter_list))
    }
}