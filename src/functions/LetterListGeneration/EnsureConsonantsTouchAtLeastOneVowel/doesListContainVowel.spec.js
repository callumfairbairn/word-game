import { doesListContainVowel } from './doesListContainVowel'

describe('doesListContainVowel', () => {
  it('returns false for a list not containing a vowel', () => {
    const letterList = ['X', 'Y', 'Z']
    expect(doesListContainVowel(letterList)).toEqual(false)
  })

  it('returns true for a list containing a vowel', () => {
    const letterList = ['X', 'O', 'Z']
    expect(doesListContainVowel(letterList)).toEqual(true)
  })
})
