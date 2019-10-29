import React from "react";
import WordDisplay from "./WordDisplay";
import { render } from "@testing-library/react";
import { within } from "@testing-library/dom";
import '../reactTestSetup'

describe('WordDisplay', () => {
    it('renders an empty display when foundWords is empty', () => {
        const { queryByTestId } = render(<WordDisplay foundWords={[]} />);
        const wordDisplay = queryByTestId('word-display');
        expect(wordDisplay).toBeTruthy();
    });

    it('renders the contents of foundWords', () => {
        const foundWords = ['one', 'two', 'three', 'four'];
        const { queryByTestId } = render(<WordDisplay foundWords={foundWords} />);
        const wordDisplay = queryByTestId('word-display');
        expect(within(wordDisplay).queryByText('one')).toBeTruthy();
        expect(within(wordDisplay).queryByText('two')).toBeTruthy();
        expect(within(wordDisplay).queryByText('three')).toBeTruthy();
        expect(within(wordDisplay).queryByText('four')).toBeTruthy();
    })
});