export const arrayToString = (array) => {
  let string = ''

  array.forEach(character => {
    string = string + character.toLowerCase()
  })
  return string
}
