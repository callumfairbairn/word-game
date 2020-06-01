export const expectArrayToContainInAnyOrder = (array, expectedArray) => {
  expect(array.sort()).toEqual(expectedArray.sort())
}