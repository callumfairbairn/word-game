import React from "react";
import {Square} from "./Square";
import {render} from "@testing-library/react";

describe('Square', () => {
    it('displays a given letter', () => {
        const { getByText } = render(<Square letter='A' />);
        expect(getByText('A'))
    })
});