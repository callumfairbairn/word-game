import Timer from "./Timer";
import React from "react";
import { render } from '@testing-library/react'

describe('Timer', () => {
    it('displays 2:00 by default', () => {
        const { getByText } = render(<Timer/>)

        expect(getByText('02:00'))
    })
})