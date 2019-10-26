import {alphabetString, defaultLetterList, xDim, yDim} from "./constants";

const generateRandomLetter = () => {
    return alphabetString[Math.floor(Math.random()*26)]
};

export const generateRandomLetterList = () => {
    return Array.from(Array(xDim*yDim), () => {
        return generateRandomLetter()
    });
};

export const generateGrid = (letterList = defaultLetterList) => {
    let i = -1;
    return Array.from(Array(xDim), () => {
        return Array.from(Array(yDim), () => {
            i++;
            return {
                letter: letterList[i],
                status: null,
            }
        })
    });
};
