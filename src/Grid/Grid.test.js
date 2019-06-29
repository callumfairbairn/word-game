import {render} from "@testing-library/react";
import {Grid} from "./Grid";
import React from "react";

describe('Grid', () => {
   it('should render a grid of letters', () => {
       const { getByText } = render(<Grid xDim={4} yDim={4} input={'input'}/>);
       expect(getByText('A'));
       expect(getByText('B'));
       expect(getByText('C'));
       expect(getByText('D'));
       expect(getByText('E'));
       expect(getByText('F'));
       expect(getByText('G'));
       expect(getByText('H'));
       expect(getByText('I'));
       expect(getByText('J'));
       expect(getByText('K'));
       expect(getByText('L'));
       expect(getByText('M'));
       expect(getByText('N'));
       expect(getByText('O'));
       expect(getByText('P'));
   })
});