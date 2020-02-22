export const returnNumberOfTimesSetAppearsInList = (letterList, set) => {
  let vowelCounter = 0
  letterList.forEach(letter => {
    if (set.includes(letter)) {
      vowelCounter++
    }
  })
  return vowelCounter
}
