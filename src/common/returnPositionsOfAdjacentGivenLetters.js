import {xDim, yDim} from "./constants";

const returnPositionsOfAdjacentGivenLetters = (grid, x, y, letter) => {
    const newListOfPositions = [];
    if (letter) {
        for (let m = -1; m < 2; m++) {
            for (let n = -1; n < 2; n++) {
                if (0 <= x+m  && x+m <= xDim-1 && 0 <= y+n  && y+n <= yDim-1 && grid[x+m][y+n].letter.toLowerCase() === letter) {
                    newListOfPositions.push({x: x+m, y: y+n});
                }
            }
        }
    }
    return newListOfPositions
};

export default returnPositionsOfAdjacentGivenLetters;
