use std::collections::HashMap;
use crate::structs::{Location, Grid, Letter};

pub(crate) type Callback = fn(&Location, &Grid) -> Option<Letter>;

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

pub (crate) fn get_direction_function_map() -> HashMap<&'static str, Callback> {
    [
        ("right", get_right_letter as Callback),
        ("downright", get_downright_letter as Callback),
        ("down", get_right_letter as Callback),
        ("downleft", get_downleft_letter as Callback),
        ("left", get_left_letter as Callback),
        ("upleft", get_upleft_letter as Callback),
        ("up", get_up_letter as Callback),
        ("upright", get_upright_letter as Callback),
    ].iter().cloned().collect()
}

fn get_right_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.y + 1 >= grid.len() as i32 {
        None
    } else {
        Some(grid[(location.y + 1 )as usize][location.x as usize].clone())
    }
}

fn get_downright_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.y + 1 >= grid.len() as i32 || location.x + 1 >= grid[location.y as usize].len() as i32 {
        None
    } else {
        Some(grid[(location.y + 1 )as usize][(location.x + 1) as usize].clone())
    }
}

fn get_down_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.x + 1 >= grid[location.y as usize].len() as i32 {
        None
    } else {
        Some(grid[location.y as usize][(location.x + 1) as usize].clone())
    }
}

fn get_downleft_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.y - 1 <= 0 || location.x + 1 >= grid[location.y as usize].len() as i32 {
        None
    } else {
        Some(grid[(location.y - 1) as usize][(location.x + 1) as usize].clone())
    }
}

fn get_left_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.y - 1 <= 0 {
        None
    } else {
        Some(grid[(location.y - 1) as usize][location.x as usize].clone())
    }
}

fn get_upleft_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.y - 1 < 0 || location.x - 1 < 0 {
        None
    } else {
        Some(grid[(location.y - 1) as usize][(location.x - 1) as usize].clone())
    }
}

fn get_up_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.x - 1 < 0 {
        None
    } else {
        Some(grid[location.y as usize][(location.x - 1) as usize].clone())
    }
}

fn get_upright_letter(location: &Location, grid: &Grid) -> Option<Letter> {
    return if location.y + 1 >= grid.len() as i32 || location.x - 1 < 0 {
        None
    } else {
        Some(grid[(location.y + 1) as usize][(location.x - 1) as usize].clone())
    }
}
