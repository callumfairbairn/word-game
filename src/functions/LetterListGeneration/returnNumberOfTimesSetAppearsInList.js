export const returnNumberOfTimesSetAppearsInList = (letterList, set) => {
  let vowelCounter = 0
  letterList.map(letter => {
    if (set.includes(letter)) {
      vowelCounter++
    }
  })
  return vowelCounter
}
