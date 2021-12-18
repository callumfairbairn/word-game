import { arrayToString } from './arrayToString'

describe('arrayToString', () => {
  it('returns empty string given sn empty array', () => {
    const array = []
    expect(arrayToString(array)).toEqual('')
  })

  it('returns a lower case character given an uppercase character', () => {
    const array = ['A']
    expect(arrayToString(array)).toEqual('a')
  })

  it('returns two characters if given two characters', () => {
    const array = ['A', 'B']
    expect(arrayToString(array)).toEqual('ab')
  })
})
