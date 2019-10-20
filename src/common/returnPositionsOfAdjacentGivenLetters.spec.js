import {generateGrid} from "./functions";
import {defaultLetterList} from "./constants";
import returnPositionsOfAdjacentGivenLetters from "./returnPositionsOfAdjacentGivenLetters";

describe('returnPositionsOfAdjacentGivenLetters', () => {
    it('should return a location of a given letter surrounding a given location', () => {
        const grid = generateGrid(defaultLetterList);
        expect(returnPositionsOfAdjacentGivenLetters(grid, 1, 1, 'g')).toEqual([{x: 1, y: 2}])
    });

    it('should return a list of the locations of a given letter surrounding a given location', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        expect(returnPositionsOfAdjacentGivenLetters(grid, 1, 1, 'g')).toEqual([{x: 1, y: 2}, {x: 2, y: 1}])
    })
});