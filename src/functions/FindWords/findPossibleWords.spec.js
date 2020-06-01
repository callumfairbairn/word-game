import { findPossibleWords } from './findPossibleWords'
import { expectArrayToContainInAnyOrder } from '../../testHelpers/ExpectArrayToContainInAnyOrder/expectArrayToContainInAnyOrder'

const dict = require('../../words').words

describe('findPossibleWords', () => {
  it('returns empty string if input is not the start of any word', () => {
    const startOfWord = 'ljkhsdf'
    expectArrayToContainInAnyOrder(findPossibleWords(startOfWord, dict), [])
  })

  it('returns the input if the input is in the dictionary', () => {
    const startOfWord = 'catamarans'
    expectArrayToContainInAnyOrder(findPossibleWords(startOfWord, dict), ['catamarans'])
  })

  it('returns all words that start with the input string', () => {
    const startOfWord = 'catamaran'
    expectArrayToContainInAnyOrder(findPossibleWords(startOfWord, dict), ['catamaran', 'catamarans'])
  })

  it('does not returns words that do not start with the input string', () => {
    const startOfWord = 'purposed'
    expectArrayToContainInAnyOrder(findPossibleWords(startOfWord, dict), ['purposed'])
  })
})
