import removePreviouslyFoundLetters from "./removePreviouslyFoundLetters";

describe('removePreviouslyFoundLetters', () => {
    it('should return input when input is not in current path', () => {
        const input = [{ x: 0, y: 0}];
        const thisPath = [{ x: 1, y: 1}];
        expect(removePreviouslyFoundLetters(input, thisPath)).toEqual(input)
    });

    it('should remove input if it is in path', () => {
        const input = [{ x: 1, y: 1}];
        const thisPath = [{ x: 1, y: 1}];
        expect(removePreviouslyFoundLetters(input, thisPath)).toEqual([])
    });

    it('should work for longer path', () => {
        const input = [{ x: 1, y: 1}];
        const thisPath = [{ x: 1, y: 1}, { x: 2 , y: 2 }];
        expect(removePreviouslyFoundLetters(input, thisPath)).toEqual([])
    });

    it('should not exclude all inputs if one is repeated', () => {
        const input = [{ x: 1, y: 1}, { x: 2 , y: 2 }];
        const thisPath = [{ x: 1, y: 1}];
        expect(removePreviouslyFoundLetters(input, thisPath)).toEqual([{ x: 2 , y: 2 }])
    })

    it('should work for long arrays', () => {
        const input = [{ x: 1, y: 1}, { x: 2 , y: 2 }, { x: 3 , y: 3 }];
        const thisPath = [{ x: 1, y: 1}, { x: 2 , y: 2 }, { x: 4 , y: 4 }];
        expect(removePreviouslyFoundLetters(input, thisPath)).toEqual([{ x: 3 , y: 3 }])
    })
});
