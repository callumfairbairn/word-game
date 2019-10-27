import isInputValid from "./isInputValid";

const dict = require('../words');

describe('isInputValid', () => {
    it('returns false for an empty input', () => {
        const input = '';
        const foundWords = [''];
        expect(isInputValid(input, dict, foundWords)).toEqual(false)
    });

    it('returns true for a real word', () => {
        const input = 'word';
        const foundWords = [''];
        expect(isInputValid(input, dict, foundWords)).toEqual(true)
    });

    it('returns false for a real word smaller than 3 characters long', () => {
        const input = 'to';
        const foundWords = [''];
        expect(isInputValid(input, dict, foundWords)).toEqual(false)
    });

    it('returns false if word has already been found', () => {
       const input = 'miasma';
       const foundWords = ['miasma'];
       expect(isInputValid(input, dict, foundWords)).toEqual(false)
    })
});