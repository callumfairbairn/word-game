import React from "react";
import {Square} from "./Square";
import {render} from "@testing-library/react";
import '../reactTestSetup';

describe('Square', () => {
    it('displays a given letter', () => {
        const { getByText } = render(<Square letter='A' status={''} />);
        expect(getByText('A'))
    });

    it ('displayes an unselected square', () => {
        const { getByTestId } = render(<Square letter='A' status={''}/>);
        expect(getByTestId('square'))
    });

    it('displays a selected square', () => {
        const { getByTestId } = render(<Square letter='A' status={'selected'} />);
        expect(getByTestId('square-selected'))
    });

    it('displays a green square when a word is correct', () => {
        const { getByTestId } = render(<Square letter='A' status={'correct'} />);
        expect(getByTestId('square-correct'))
    })
});