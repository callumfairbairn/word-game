pub(crate) fn capitalise(character: &char) ->  char {
    character.to_uppercase().nth(0).unwrap()
}