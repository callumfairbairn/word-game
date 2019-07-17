import {render} from "@testing-library/react";
import {Grid} from "./Grid";
import React from "react";
import '../reactTestSetup'
import {defaultLetterList} from "../common/constants";

describe('Grid', () => {
   it('should render a grid of letters', () => {
       const { getAllByTestId } = render(<Grid letterList={defaultLetterList} input={''}/>);
       expect(getAllByTestId('square').length).toEqual(16)
   });

    it('should render five selected letters given an input of length 5', () => {
        const { getAllByTestId } = render(<Grid letterList={defaultLetterList} input={'knife'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(5)
    });

    it('should should not select a letter if that letter is not next to the previous letter', () => {
        const { getAllByTestId } = render(<Grid letterList={defaultLetterList} input={'abcde'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(4)
    });

    it('should not select a letter if the last letter has already been selected earlier', () => {
        const { getAllByTestId } = render(<Grid letterList={defaultLetterList} input={'olpok'}/>);
        expect(getAllByTestId('square-selected').length).toEqual(3)
    });
});