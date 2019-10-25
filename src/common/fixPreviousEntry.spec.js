import {generateGrid} from "./functions";
import fixPreviousEntry from "./fixPreviousEntry";

const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);

describe('fixPreviousEntry', () => {
    it('returns unadulterated previousLetter', () => {
        const previousLetter1 = [{ x: 0, y: 0 }];
        const previousLetter2 = [{ x: 0, y: 2 }];
        const adjacentLetter = { x: 0, y: 1 };

        expect(fixPreviousEntry(grid, previousLetter1, adjacentLetter)).toEqual([{ x: 0, y: 0 }]);
        expect(fixPreviousEntry(grid, previousLetter2, adjacentLetter)).toEqual([{ x: 0, y: 2 }])
    });

    it('returns one only previousLetters that are next to adjacent letter', () => {
        const previousLetters = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const adjacentLetters = { x: 1, y: 3 };

        expect(fixPreviousEntry(grid, previousLetters, adjacentLetters)).toEqual([{ x: 1, y: 2 }])
    });
});
