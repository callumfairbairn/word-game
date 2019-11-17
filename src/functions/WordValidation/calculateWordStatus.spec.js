import calculateWordStatus from './calculateWordStatus'

const dict = require('../../words')

describe('isInputValid', () => {
  it('returns selected for an empty input', () => {
    const word = ''
    const foundWords = ['']
    expect(calculateWordStatus(word, dict, foundWords)).toEqual('selected')
  })

  it('returns correct for a real word', () => {
    const word = 'word'
    const foundWords = ['']
    expect(calculateWordStatus(word, dict, foundWords)).toEqual('correct')
  })

  it('returns selected for a real word smaller than 3 characters long', () => {
    const word = 'to'
    const foundWords = ['']
    expect(calculateWordStatus(word, dict, foundWords)).toEqual('selected')
  })

  it('returns found if word has already been found', () => {
    const word = 'miasma'
    const foundWords = ['miasma']
    expect(calculateWordStatus(word, dict, foundWords)).toEqual('found')
  })
})
