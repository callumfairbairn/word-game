const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const xDim = 4, yDim = 4;

export const generateRandomLetter = () => {
    return alphabetString[Math.floor(Math.random()*26)]
};

export const generateRandomGrid = () => {
    return Array.from(Array(xDim), () => {
        return Array.from(Array(yDim), () => {
            return {
                letter: generateRandomLetter(),
            }
        })
    });
};

