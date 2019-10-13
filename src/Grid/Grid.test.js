import {render} from "@testing-library/react";
import {findLocationsOfLetter, Grid, returnPositionsOfAdjacentGivenLetters} from "./Grid";
import React from "react";
import '../reactTestSetup'
import {defaultLetterList} from "../common/constants";
import {generateGrid} from "../common/functions";

describe('Grid', () => {
    it('should render a grid of letters', () => {
        const {queryAllByTestId} = render(<Grid letterList={defaultLetterList} input={''}/>);
        expect(queryAllByTestId('square').length).toEqual(16)
    });

    it('should render five selected letters given an input of length 5', () => {
        const {queryAllByTestId} = render(<Grid letterList={defaultLetterList} input={'knife'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(5)
    });

    it('should should not select a letter if that letter is not next to the previous letter', () => {
        const {queryAllByTestId} = render(<Grid letterList={defaultLetterList} input={'abcde'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(0)
    });

    it('should not select a letter if it has already been selected earlier', () => {
        const {queryAllByTestId} = render(<Grid letterList={defaultLetterList} input={'olpok'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(0)
    });

    it('should not keep a letter selected if the next letter is not adjacent to it', () => {
        const customLetterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "A", "N", "O", "P"];
        const {queryAllByTestId} = render(<Grid letterList={customLetterList} input={'ab'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(2)
    })
});

describe('returnPositionsOfAdjacentGivenLetters', () => {
    it('should return a location of a given letter surrounding a given location', () => {
        const grid = generateGrid(defaultLetterList);
        expect(returnPositionsOfAdjacentGivenLetters(grid, 1, 1, 'g')).toEqual([{x: 1, y: 2}])
    });

    it('should return a list of the locations of a given letter surrounding a given location', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        expect(returnPositionsOfAdjacentGivenLetters(grid, 1, 1, 'g')).toEqual([{x: 1, y: 2}, {x: 2, y: 1}])
    })
});

describe('findLocationsOfLetter', () => {
    it('should return a position for a letter occurring only once', () => {
        const grid = generateGrid(defaultLetterList);
        const letter = 'E';
        expect(findLocationsOfLetter(grid, letter)).toEqual([{x: 1, y: 0}])
    });

    it('should return a list of positions for letters occuring more than once', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const letter = 'G';
        expect(findLocationsOfLetter(grid, letter)).toEqual([{x: 1, y: 2}, {x: 2, y: 1}])
    })
});

describe('pathFindingAlgorithm', () => {
    it('should find initial locations', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'g';
        expect(pathFindingAlgorithm(grid, input)).toEqual([[{x: 1, y: 2}], [{x: 2, y: 1}]])
    });
    it('should return a path of two letters long', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'gf';
        expect(pathFindingAlgorithm(grid, input)).toEqual([[{x: 1, y: 2}, {x: 1, y: 1}], [{x: 2, y: 1}, {x: 1, y: 1}]])
    })
    it('should return a path of three letters long', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'gfb';
        expect(pathFindingAlgorithm(grid, input)).toEqual([
            [
                {x: 1, y: 2}, {x: 1, y: 1}, {x: 0, y: 1}
            ],
            [
                {x: 2, y: 1}, {x: 1, y: 1}, {x: 0, y: 1}
            ]
        ])
    })
});

const pathFindingAlgorithm = (grid, input) => {
    const paths = [];
    const startingPlaces = findLocationsOfLetter(grid, input[0]);
    for (let n = 0; n < startingPlaces.length; n++) {
        const initialLetter = startingPlaces[n];
        const thisPath = [initialLetter];
        for (let i = 0; i < input.length-1; i++) {
            thisPath.push(...returnPositionsOfAdjacentGivenLetters(grid, thisPath[i].x, initialLetter.y, input[i+1]))
        }
        paths.push([...thisPath])
    }
    return paths
};