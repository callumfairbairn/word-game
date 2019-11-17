const calculateWordStatus = (word, dict, foundWords) => {
  if (word.length < 3) return 'selected'
  if (foundWords.indexOf(word) !== -1) return 'found'
  return dict.words.indexOf(word) !== -1 ? 'correct' : 'selected'
}

export default calculateWordStatus
