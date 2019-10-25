import {render} from "@testing-library/react";
import {assignLetterStatus, Grid} from "./Grid";
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

    it('should not keep a letter selected if the next letter is not adjacent to it', () => {
        const customLetterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "A", "N", "O", "P"];
        const {queryAllByTestId} = render(<Grid letterList={customLetterList} input={'ab'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(2)
    })
});

describe('assignLetterStatus', () => {
    it('assigns no letters status if path is []', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [];
        const result = assignLetterStatus(grid, paths);
        result.map(x => {
            x.map(y => {
                expect(y.inputIndex).toEqual(null)
            })
        })
    });

    it('assigns letter status to one letter', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [[{ x: 0 , y: 0 }]];
        const result = assignLetterStatus(grid, paths);
        expect(result[0][0].inputIndex).toEqual(1)
    });

    it('assigns letter status to a different letter', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [[{ x: 1 , y: 1 }]];
        const result = assignLetterStatus(grid, paths);
        expect(result[1][1].inputIndex).toEqual(1)
    });

    it('assigns status for two letters', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [[{ x: 1 , y: 1 }, { x: 2 , y: 2 }]];
        const result = assignLetterStatus(grid, paths);
        expect(result[1][1].inputIndex).toEqual(1);
        expect(result[2][2].inputIndex).toEqual(1)
    });

    it('assigns status for a branching path', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [[{ x: 1 , y: 2 }, [ { x: 3 , y: 1 }, { x: 0 , y: 2 }]]];
        const result = assignLetterStatus(grid, paths);
        expect(result[1][2].inputIndex).toEqual(1);
        expect(result[3][1].inputIndex).toEqual(1);
        expect(result[0][2].inputIndex).toEqual(1)
    });

    it('assigns status for multiple paths', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [[{ x: 1 , y: 1 }, { x: 2 , y: 1 }], [{ x: 2 , y: 2 }, { x: 2 , y: 3 }]];
        const result = assignLetterStatus(grid, paths);
        expect(result[1][1].inputIndex).toEqual(1);
        expect(result[2][1].inputIndex).toEqual(1);
        expect(result[2][2].inputIndex).toEqual(1)
    });

    it('assigns status for multiple paths', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const paths = [[{ x: 1 , y: 1 }, { x: 2 , y: 1 }], [{ x: 2 , y: 2 }, { x: 2 , y: 3 }]];
        const result = assignLetterStatus(grid, paths);
        expect(result[1][1].inputIndex).toEqual(1);
        expect(result[2][1].inputIndex).toEqual(1);
        expect(result[2][2].inputIndex).toEqual(1)
    });
});
