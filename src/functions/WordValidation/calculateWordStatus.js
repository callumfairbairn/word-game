const calculateWordStatus = (word, dict, foundWords, userHasPressedReturn) => {
  if (word.length < 3) return userHasPressedReturn ? 'wrong' : 'selected'
  if (foundWords.indexOf(word) !== -1) return 'found'
  if (!userHasPressedReturn) return 'selected'
  return dict.words.indexOf(word) !== -1 ? 'correct' : 'wrong'
}

export default calculateWordStatus
