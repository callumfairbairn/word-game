import {render} from "@testing-library/react";
import App from "./App";
import React from "react";

describe('App', () => {
   it('should render a random grid', () => {
       const { getAllByTestId } = render(<App />);
       const expectedLetterList = ["A", "E", "I", "M", "B", "F", "J", "N", "C", "G", "K", "O", "D", "H", "L", "P"];
       const letters = getAllByTestId('square').map(square => {
           return square.textContent
       });

       expect(letters).not.toEqual(expectedLetterList)
   })
});