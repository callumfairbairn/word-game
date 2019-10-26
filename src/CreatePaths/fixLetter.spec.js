import fixLetter from "./fixLetter";

describe('fixLetter', () => {
    it('returns unadulterated previousLetter', () => {
        const thisLetter1 = [{ x: 0, y: 0 }];
        const thisLetter2 = [{ x: 0, y: 2 }];
        const nextLetter = [{ x: 0, y: 1 }];

        expect(fixLetter(thisLetter1, nextLetter)).toEqual([{ x: 0, y: 0 }]);
        expect(fixLetter(thisLetter2, nextLetter)).toEqual([{ x: 0, y: 2 }])
    });

    it('returns one only previousLetters that are next to adjacent letter', () => {
        const thisLetter = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const nextLetters = [{ x: 1, y: 3 }];

        expect(fixLetter(thisLetter, nextLetters)).toEqual([{ x: 1, y: 2 }])
    });

    it('returns both thisLetter if the are adjacent to one of the next letters', () => {
        const thisLetter = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
        const nextLetters = [{ x: 1, y: 3 }, {x: 3, y: 1}];

        expect(fixLetter(thisLetter, nextLetters)).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }])
    });
});
