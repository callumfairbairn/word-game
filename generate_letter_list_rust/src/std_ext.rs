#[cfg(test)]
pub(crate) fn capitalise(character: &char) ->  char {
    character.to_uppercase().nth(0).unwrap()
}
pub(crate) fn lowercase(character: char) ->  char {
    character.to_lowercase().nth(0).unwrap()
}