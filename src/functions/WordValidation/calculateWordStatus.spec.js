import calculateWordStatus from './calculateWordStatus'

const dict = require('../../words')

describe('isInputValid', () => {
  it('returns selected for an empty input', () => {
    const word = ''
    const foundWords = ['']
    const userHasPressedReturn = true
    expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('selected')
  })

  it('returns correct for a real word', () => {
    const word = 'word'
    const foundWords = ['']
    const userHasPressedReturn = true
    expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('correct')
  })

  it('returns selected for a real word smaller than 3 characters long', () => {
    const word = 'to'
    const foundWords = ['']
    const userHasPressedReturn = true
    expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('selected')
  })

  it('returns found if word has already been found', () => {
    const word = 'miasma'
    const foundWords = ['miasma']
    const userHasPressedReturn = true
    expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('found')
  })

  it('returns selected for a real word if userHasPressedReturn is false', () => {
    const word = 'candle'
    const foundWords = []
    const userHasPressedReturn = false
    expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('selected')
  })

  it('returns found for a real word if userHasPressedReturn is false and word has already been found', () => {
    const word = 'olive'
    const foundWords = ['olive']
    const userHasPressedReturn = false
    expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('found')
  })
})
