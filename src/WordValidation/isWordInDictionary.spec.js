import isWordInDictionary from './isWordInDictionary'

const dict = require('../words')

describe('isInputValid', () => {
  it('returns false for an empty input', () => {
    const word = ''
    const foundWords = ['']
    expect(isWordInDictionary(word, dict, foundWords)).toEqual(false)
  })

  it('returns true for a real word', () => {
    const word = 'word'
    const foundWords = ['']
    expect(isWordInDictionary(word, dict, foundWords)).toEqual(true)
  })

  it('returns false for a real word smaller than 3 characters long', () => {
    const word = 'to'
    const foundWords = ['']
    expect(isWordInDictionary(word, dict, foundWords)).toEqual(false)
  })

  it('returns false if word has already been found', () => {
    const word = 'miasma'
    const foundWords = ['miasma']
    expect(isWordInDictionary(word, dict, foundWords)).toEqual(false)
  })
})
