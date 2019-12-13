import calculateWordStatus from './calculateWordStatus'

const dict = require('../../words')

describe('isInputValid', () => {
  describe('when userHasPressedReturn is false', () => {
    const userHasPressedReturn = false

    it('returns selected for an empty input', () => {
      const word = ''
      const foundWords = ['']
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('selected')
    })

    it('returns selected for a real word smaller than 3 characters long', () => {
      const word = 'to'
      const foundWords = ['']
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('selected')
    })

    it('returns selected for a real word if userHasPressedReturn is false', () => {
      const word = 'candle'
      const foundWords = []
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('selected')
    })

    it('returns found for a real word if userHasPressedReturn is false and word has already been found', () => {
      const word = 'olive'
      const foundWords = ['olive']
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('found')
    })
  })

  describe('when userHasPressedReturn is false', () => {
    const userHasPressedReturn = true

    it('returns found if word has already been found', () => {
      const word = 'miasma'
      const foundWords = ['miasma']
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('found')
    })

    it('returns correct for a real word', () => {
      const word = 'word'
      const foundWords = ['']
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('correct')
    })

    it('returns wrong for wrong word if userHasPressed return is true', () => {
      const word = 'lkajs'
      const foundWords = []
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('wrong')
    })

    it('returns wrong for less than three letters if userHasPressed return is true', () => {
      const word = 'as'
      const foundWords = []
      expect(calculateWordStatus(word, dict, foundWords, userHasPressedReturn)).toEqual('wrong')
    })
  })
})
