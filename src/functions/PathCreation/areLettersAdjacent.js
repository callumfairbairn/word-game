export const areLettersAdjacent = (letter1, letter2) => {
  return letter1 === letter2
    ? false
    : (Math.abs(letter1.x - letter2.x) <= 1 && Math.abs(letter1.y - letter2.y) <= 1)
}
