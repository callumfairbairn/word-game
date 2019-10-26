import returnPositionsOfAdjacentCharacters from "./returnPositionsOfAdjacentCharacters";
import findLocationsOfLetter from "./findLocationsOfLetter";
import fixPreviousEntries from "./fixPreviousEntries";
import removePreviouslyFoundLetters from "./removePreviouslyFoundLetters";

const pathFindingAlgorithm = (grid, input) => {
    if (input.length === 0) {
        return []
    }

    const paths = [];
    const startingPlaces = findLocationsOfLetter(grid, input[0]);
    for (let n = 0; n < startingPlaces.length; n++) {
        const initialLetters = startingPlaces[n];
        const thisPath = [initialLetters];
        let startingLetterValid = true;
        for (let i = 0; i < input.length-1 && startingLetterValid; i++) {
            let previousLetters = thisPath[i];
            previousLetters = Array.isArray(previousLetters) ? previousLetters : [previousLetters];
            const adjacentLetters = returnPositionsOfAdjacentCharacters(grid, previousLetters, input[i+1]);

            const fixedAdjacentLetters = removePreviouslyFoundLetters(adjacentLetters, thisPath);

            if (fixedAdjacentLetters.length === 0) {
                startingLetterValid = false;
            } else {
                if (fixedAdjacentLetters.length > 1) {
                    thisPath.push(fixedAdjacentLetters)
                } else {
                    thisPath.push(...fixedAdjacentLetters)
                }


                const fixedPreviousEntries = fixPreviousEntries(previousLetters, fixedAdjacentLetters);

                if(fixedPreviousEntries.length > 1) {
                    thisPath.splice(i, 1, fixedPreviousEntries);
                } else {
                    thisPath.splice(i, 1, ...fixedPreviousEntries);
                }
            }
        }
        if (startingLetterValid) {
            paths.push([...thisPath])
        }
    }
    return paths
};

export default pathFindingAlgorithm;
