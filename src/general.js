const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generateRandomLetter = () => {
    return alphabetString[Math.floor(Math.random()*26)]
};

export const generateRandomGrid = (xDim, yDim) => {
    return Array.from(Array(xDim), () => {
        return Array.from(Array(yDim), () => {
            return {
                letter: generateRandomLetter(),
            }
        })
    });
};

