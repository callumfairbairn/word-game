const removePreviouslyFoundLetters = (letters, thisPath) => {
  return letters.filter(letter => {
    return thisPath.every(path => {
      return letter.x !== path.x || letter.y !== path.y
    })
  })
}

export default removePreviouslyFoundLetters
