export const findPossibleWords = (input, possibleWords) => {
  return possibleWords.filter(word => { return word.startsWith(input) })
}
