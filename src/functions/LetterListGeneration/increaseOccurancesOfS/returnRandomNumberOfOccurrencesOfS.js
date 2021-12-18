import { MIN_AND_MAX_OCCURANCES_OF_S } from '../../../common/constants'

export const returnRandomNumberOfOccurrencesOfS = () => {
  return Math.floor(Math.random() * (MIN_AND_MAX_OCCURANCES_OF_S.max - MIN_AND_MAX_OCCURANCES_OF_S.min + 1) + 1)
}
