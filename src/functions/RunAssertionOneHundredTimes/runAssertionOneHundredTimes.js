export const runAssertionOneHundredTimes = (assertion) => {
  for (let x = 0; x < 100; x++) {
    assertion()
  }
}
