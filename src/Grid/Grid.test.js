import {render} from "@testing-library/react";
import {Grid} from "./Grid";
import React from "react";
import '../reactTestSetup'
import {xDim, yDim} from "../general";

const standardGrid = () => {
    let letters = Array.from(Array(xDim), () => {
        return Array.from(Array(yDim), () => {
            return {}
        })
    });
    letters[0][0] = {letter: 'A', inputIndex: null};
    letters[0][1] = {letter: 'B', inputIndex: null};
    letters[0][2] = {letter: 'C', inputIndex: null};
    letters[0][3] = {letter: 'D', inputIndex: null};
    letters[1][0] = {letter: 'E', inputIndex: null};
    letters[1][1] = {letter: 'F', inputIndex: null};
    letters[1][2] = {letter: 'G', inputIndex: null};
    letters[1][3] = {letter: 'H', inputIndex: null};
    letters[2][0] = {letter: 'I', inputIndex: null};
    letters[2][1] = {letter: 'J', inputIndex: null};
    letters[2][2] = {letter: 'K', inputIndex: null};
    letters[2][3] = {letter: 'L', inputIndex: null};
    letters[3][0] = {letter: 'M', inputIndex: null};
    letters[3][1] = {letter: 'N', inputIndex: null};
    letters[3][2] = {letter: 'O', inputIndex: null};
    letters[3][3] = {letter: 'P', inputIndex: null};
    return letters;
};

describe('Grid', () => {
   it('should render a grid of letters', () => {
       const { getAllByTestId } = render(<Grid letterGrid={standardGrid()} input={''}/>);
       expect(getAllByTestId('square').length).toEqual(16)
   });

    it('should render five selected letters given an input of length 5', () => {
        const { getAllByTestId } = render(<Grid letterGrid={standardGrid()} input={'knife'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(5)
    });

    it('should should not select a letter if that letter is not next to the previous letter', () => {
        const { getAllByTestId } = render(<Grid letterGrid={standardGrid()} input={'abcde'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(4)
    });

    it('should not select a letter if the last letter has already been selected earlier', () => {
        const { getAllByTestId } = render(<Grid letterGrid={standardGrid(xDim, yDim)} input={'olpok'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(3)
    });
});