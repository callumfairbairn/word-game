import {areLettersAdjacent} from "./areLettersAdjacent";

const fixLetter = (thisLetter, nextLetter) => {
    return thisLetter.filter((letter) => {
        return nextLetter.map(adjacentLetter => {
            return areLettersAdjacent(letter, adjacentLetter)
        }).includes(true)
    });
};

export default fixLetter