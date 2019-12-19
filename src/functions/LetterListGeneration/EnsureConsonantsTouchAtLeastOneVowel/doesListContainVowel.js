import { VOWELS } from '../../../common/constants'

export const doesListContainVowel = (letterList) => {
  let tracker = false
  for (let x = 0; x < letterList.length; x++) {
    if (VOWELS.includes(letterList[x])) {
      tracker = true
    }
  }
  return tracker
}
