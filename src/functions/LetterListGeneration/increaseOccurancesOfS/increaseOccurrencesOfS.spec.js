import { returnNumberOfTimesSetAppearsInList } from '../common/returnNumberOfTimesSetAppearsInList'
import { increaseOccurrencesOfS } from './increaseOccurrencesOfS'
import { returnRandomNumberOfOccurrencesOfS } from './returnRandomNumberOfOccurrencesOfS'

jest.mock('./returnRandomNumberOfOccurrencesOfS', () => ({
  returnRandomNumberOfOccurrencesOfS: jest.fn()
}))

describe('increaseOccurrencesOfS', () => {
  it('does not change letter list when correct number of S is passed in', () => {
    const letterList = ['A', 'B', 'C', 'E', 'S', 'I', 'O', 'U']
    const set = ['S']
    const minOccurrencesOfS = 1
    returnRandomNumberOfOccurrencesOfS.mockReturnValue(minOccurrencesOfS)
    increaseOccurrencesOfS(letterList)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(minOccurrencesOfS)
  })

  it('adds Ss up to the correct number', () => {
    const letterList = ['G', 'B', 'C', 'F', 'X', 'V', 'N', 'M']
    const set = ['S']
    const minOccurrencesOfS = 2
    returnRandomNumberOfOccurrencesOfS.mockReturnValue(minOccurrencesOfS)
    increaseOccurrencesOfS(letterList)
    expect(returnNumberOfTimesSetAppearsInList(letterList, set)).toEqual(minOccurrencesOfS)
  })
})
