import {render} from "@testing-library/react";
import App from "./App";
import React from "react";
import {defaultLetterList} from "./common/constants";

describe('App', () => {
   it('should render a random grid', () => {
       const { getAllByTestId } = render(<App />);
       const letters = getAllByTestId('square').map(square => {
           return square.textContent
       });

       expect(letters).not.toEqual(defaultLetterList)
   })
});