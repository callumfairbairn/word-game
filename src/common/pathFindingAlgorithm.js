import {findLocationsOfLetter, returnPositionsOfAdjacentGivenLetters} from "../Grid/Grid";

const pathFindingAlgorithm = (grid, input) => {
    const paths = [];
    const startingPlaces = findLocationsOfLetter(grid, input[0]);
    for (let n = 0; n < startingPlaces.length; n++) {
        const initialLetter = startingPlaces[n];
        const thisPath = [initialLetter];
        for (let i = 0; i < input.length-1; i++) {
            let lastLetter = thisPath[i];
            lastLetter = Array.isArray(lastLetter) ? lastLetter[0] : lastLetter;
            const adjacentLetters = returnPositionsOfAdjacentGivenLetters(grid, lastLetter.x, lastLetter.y, input[i+1]);

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
