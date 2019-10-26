import isInputValid from "./isInputValid";

const dict = require('../words');

describe('isInputValid', () => {
    it('returns false for an empty input', () => {
        const input = '';
        expect(isInputValid(input, dict)).toEqual(false)
    });

    it('returns true for a real word', () => {
        const input = 'word';
        expect(isInputValid(input, dict)).toEqual(true)
    });

    it('returns false for a real word smaller than 3 characters long', () => {
        const input = 'to';
        expect(isInputValid(input, dict)).toEqual(false)
    })
});