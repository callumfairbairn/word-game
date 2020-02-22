const removePreviouslyFoundLetters = (letters, thisPath) => {
  const lettersLength = letters.length
  if (lettersLength > 1) {
    return letters.filter(letter => {
      let maybeFound = 0
      let definitelyFound = 0
      thisPath.forEach(pathLetter => {
        if (Array.isArray(pathLetter)) {
          pathLetter.forEach(subLetter => {
            if (!hasLetterAppearedBefore(letter, subLetter)) { maybeFound++ }
          })
        } else {
          if (!hasLetterAppearedBefore(letter, pathLetter)) { definitelyFound++ }
        }
      })
      return !(definitelyFound || maybeFound >= lettersLength)
    })
  }

  return letters.filter(letter => {
    return thisPath.every(path => {
      return letter.x !== path.x || letter.y !== path.y
    })
  })
}

const hasLetterAppearedBefore = (letter, pathLetter) => {
  return letter.x !== pathLetter.x || letter.y !== pathLetter.y
}

export default removePreviouslyFoundLetters
