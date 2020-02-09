export const calculateNewUsedLetters = (usedLetters, paths) => {
  const newUsedLetters = usedLetters.map((row) => row.slice())
  const alreadySelectedLetters = []

  paths.forEach(letter => {
    if (Array.isArray(letter)) {
      letter.forEach(subLetter => {
        if (Array.isArray(subLetter)) {
          subLetter.forEach(subSubLetter => {
            dealWithLetter(newUsedLetters, alreadySelectedLetters, subSubLetter)
          })
        } else {
          dealWithLetter(newUsedLetters, alreadySelectedLetters, subLetter)
        }
      })
    } else {
      dealWithLetter(newUsedLetters, alreadySelectedLetters, letter)
    }
  })

  return newUsedLetters
}

const dealWithLetter = (newUsedLetters, alreadySelectedLetters, letter) => {
  if (!letterHasAlreadyBeenSelected(alreadySelectedLetters, letter)) {
    newUsedLetters[letter.x][letter.y]++
    alreadySelectedLetters.push(letter)
  }
}

const letterHasAlreadyBeenSelected = (alreadySelectedLetters, letter) => {
  for (let i = 0; i < alreadySelectedLetters.length; i++) {
    if (alreadySelectedLetters[i].x === letter.x && alreadySelectedLetters[i].y === letter.y) {
      return true
    }
  }

  return false
}
