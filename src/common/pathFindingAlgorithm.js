import returnPositionsOfAdjacentCharacters from "./returnPositionsOfAdjacentCharacters";
import findLocationsOfLetter from "./findLocationsOfLetter";
import fixPreviousEntries from "./fixPreviousEntries";

const pathFindingAlgorithm = (grid, input) => {
    const paths = [];
    const startingPlaces = findLocationsOfLetter(grid, input[0]);
    for (let n = 0; n < startingPlaces.length; n++) {
        const initialLetter = startingPlaces[n];
        const thisPath = [initialLetter];
        for (let i = 0; i < input.length-1; i++) {
            let previousLetters = thisPath[i];
            previousLetters = Array.isArray(previousLetters) ? previousLetters : [previousLetters];
            const adjacentLetters = returnPositionsOfAdjacentCharacters(grid, previousLetters, input[i+1]);

            const fixedPreviousEntries = fixPreviousEntries(previousLetters, adjacentLetters);

            if(fixedPreviousEntries.length > 1) {
                thisPath.splice(i, 1, fixedPreviousEntries);
            } else {
                thisPath.splice(i, 1, ...fixedPreviousEntries);
            }

            if (adjacentLetters.length === 0) {
                return []
            }

            if (adjacentLetters.length > 1) {
                thisPath.push(adjacentLetters)
            } else {
                thisPath.push(...adjacentLetters)
            }
        }
        paths.push([...thisPath])
    }
    return paths
};

export default pathFindingAlgorithm;
