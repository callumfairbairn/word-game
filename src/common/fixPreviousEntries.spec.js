import {generateGrid} from "./functions";
import fixPreviousEntries from "./fixPreviousEntries";

const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);

describe('fixPreviousEntries', () => {
    it('returns unadulterated previousLetter', () => {
        const previousLetter1 = [{ x: 0, y: 0 }];
        const previousLetter2 = [{ x: 0, y: 2 }];
        const adjacentLetter = [{ x: 0, y: 1 }];

        expect(fixPreviousEntries(grid, previousLetter1, adjacentLetter)).toEqual([{ x: 0, y: 0 }]);
        expect(fixPreviousEntries(grid, previousLetter2, adjacentLetter)).toEqual([{ x: 0, y: 2 }])
    });

    it('returns one only previousLetters that are next to adjacent letter', () => {
        const previousLetters = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const adjacentLetters = [{ x: 1, y: 3 }];

        expect(fixPreviousEntries(grid, previousLetters, adjacentLetters)).toEqual([{ x: 1, y: 2 }])
    });

    it('returns both previousLetters if the are adjacent to one of the next letters', () => {
        const previousLetters = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const adjacentLetters = [{ x: 1, y: 3 }, {x: 3, y: 1}];

        expect(fixPreviousEntries(grid, previousLetters, adjacentLetters)).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }])
    });
});
