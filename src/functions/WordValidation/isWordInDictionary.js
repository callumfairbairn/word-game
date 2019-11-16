const isWordInDictionary = (word, dict, foundWords) => {
  if (word.length < 3) return false
  if (foundWords.indexOf(word) !== -1) return false
  return dict.words.indexOf(word) !== -1
}

export default isWordInDictionary
