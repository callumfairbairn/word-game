import React from "react";
import {Square} from "./Square";
import {render} from "@testing-library/react";
import '../reactTestSetup';

describe('Square', () => {
    it('displays a given letter', () => {
        const { getByText } = render(<Square letter='A' selected={false} />);
        expect(getByText('A'))
    });

    it ('displayes an unselected square', () => {
        const { getByTestId } = render(<Square letter='A' selected={false}/>);
        expect(getByTestId('square'))
    });

    it('displays a selected square', () => {
        const { getByTestId } = render(<Square letter='A' selected={true} />);
        expect(getByTestId('square-selected'))
    })
});