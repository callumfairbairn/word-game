import {areLettersAdjacent} from "./areLettersAdjacent";

const fixPreviousEntry = (grid, previousLetters, adjacentLetter) => {
    return previousLetters.filter((letter) => {
        return areLettersAdjacent(letter, adjacentLetter)
    });
};

export default fixPreviousEntry