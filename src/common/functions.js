import {alphabetString, defaultLetterList, xDim, yDim} from "./constants";

export const generateRandomLetter = () => {
    return alphabetString[Math.floor(Math.random()*26)]
};

export const generateRandomLetterGrid = () => {
    const randomLetterList = Array.from(Array(xDim*yDim), () => {
        return generateRandomLetter()
    });

    return generateLetterGrid(randomLetterList)
};

export const generateLetterGrid = (letters = defaultLetterList) => {
    let i = -1;
    return Array.from(Array(xDim), () => {
        return Array.from(Array(yDim), () => {
            i++;
            return {
                letter: letters[i],
            }
        })
    });
};