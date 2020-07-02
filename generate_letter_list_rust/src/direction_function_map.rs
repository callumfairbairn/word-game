use std::collections::HashMap;
use crate::structs::{Callback};

pub (crate) const DIRECTIONS: [&str; 8] = [
    "right",
    "downright",
    "down",
    "downleft",
    "left",
    "upleft",
    "up",
    "upright"
];

lazy_static! { pub (crate) static ref DIRECTION_FUNCTION_MAP: HashMap<&'static str, Callback> =
[
    ("right", GET_RIGHT_LETTER),
    ("downright", GET_DOWNRIGHT_LETTER),
    ("down", GET_DOWN_LETTER),
    ("downleft", GET_DOWNLEFT_LETTER),
    ("left", GET_LEFT_LETTER),
    ("upleft", GET_UPLEFT_LETTER),
    ("up", GET_UP_LETTER),
    ("upright", GET_UPRIGHT_LETTER),
].iter().cloned().collect();
}

const GET_RIGHT_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.y + 1 >= grid.len() as i32 {
            None
        } else {
            Some(grid[(location.y + 1 ) as usize][location.x as usize].clone())
        }
};

const GET_DOWNRIGHT_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.y + 1 >= grid.len() as i32 || location.x + 1 >= grid[location.y as usize].len() as i32 {
            None
        } else {
            Some(grid[(location.y + 1) as usize][(location.x + 1) as usize].clone())
        }
};

const GET_DOWN_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.x + 1 >= grid[location.y as usize].len() as i32 {
            None
        } else {
            Some(grid[location.y as usize][(location.x + 1) as usize].clone())
        }
};

const GET_DOWNLEFT_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.y - 1 <= 0 || location.x + 1 >= grid[location.y as usize].len() as i32 {
            None
        } else {
            Some(grid[(location.y - 1) as usize][(location.x + 1) as usize].clone())
        }
};

const GET_LEFT_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.y - 1 <= 0 {
            None
        } else {
            Some(grid[(location.y - 1) as usize][location.x as usize].clone())
        }
};

const GET_UPLEFT_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.y - 1 < 0 || location.x - 1 < 0 {
            None
        } else {
            Some(grid[(location.y - 1) as usize][(location.x - 1) as usize].clone())
        }
};

const GET_UP_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.x - 1 < 0 {
            None
        } else {
            Some(grid[location.y as usize][(location.x - 1) as usize].clone())
        }
};

const GET_UPRIGHT_LETTER: Callback = Callback {
    function: |location, grid|
        return if location.y + 1 >= grid.len() as i32 || location.x - 1 < 0 {
            None
        } else {
            Some(grid[(location.y + 1) as usize][(location.x - 1) as usize].clone())
        }
};
