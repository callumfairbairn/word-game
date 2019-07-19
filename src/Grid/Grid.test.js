import {render} from "@testing-library/react";
import {Grid} from "./Grid";
import React from "react";
import '../reactTestSetup'
import {defaultLetterList} from "../common/constants";

describe('Grid', () => {
   it('should render a grid of letters', () => {
       const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input={''}/>);
       expect(queryAllByTestId('square').length).toEqual(16)
   });

    it('should render five selected letters given an input of length 5', () => {
        const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input={'knife'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(5)
    });

    it('should should not select a letter if that letter is not next to the previous letter', () => {
        const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input={'abcde'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(0)
    });

    it('should not select a letter if the last letter has already been selected earlier', () => {
        const { queryAllByTestId } = render(<Grid letterList={defaultLetterList} input={'olpok'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(0)
    });

    it('should not keep a letter selected if the next letter is not adjacent to it', () => {
        const customLetterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "A", "N", "O", "P"];
        const { queryAllByTestId } = render(<Grid letterList={customLetterList} input={'ab'}/>);
        expect(queryAllByTestId('square-selected').length).toEqual(2)
    })
});