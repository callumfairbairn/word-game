import {areLettersAdjacent} from "./areLettersAdjacent";

const fixPreviousEntries = (previousLetters, adjacentLetters) => {
    return previousLetters.filter((letter) => {
        return adjacentLetters.map(adjacentLetter => {
            return areLettersAdjacent(letter, adjacentLetter)
        }).includes(true)
    });
};

export default fixPreviousEntries