export const calculateNewHeatMap = (heatMap, paths) => {
  const newHeatMap = heatMap.map(row => row.slice())
  const alreadySelectedLetters = []

  paths.forEach(letter => {
    if (Array.isArray(letter)) {
      letter.forEach(subLetter => {
        if (Array.isArray(subLetter)) {
          subLetter.forEach(subSubLetter => {
            dealWithLetter(newHeatMap, alreadySelectedLetters, subSubLetter)
          })
        } else {
          dealWithLetter(newHeatMap, alreadySelectedLetters, subLetter)
        }
      })
    } else {
      dealWithLetter(newHeatMap, alreadySelectedLetters, letter)
    }
  })

  return newHeatMap
}

const dealWithLetter = (newHeatMap, alreadySelectedLetters, letter) => {
  if (!letterHasAlreadyBeenSelected(alreadySelectedLetters, letter)) {
    newHeatMap[letter.x][letter.y]++
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
