export const findPossibleWords = (input, dict) => {
  return dict.words.filter(word => { return word.startsWith(input) })
}
