import {generateGrid} from "./functions";
import pathFindingAlgorithm from "./pathFindingAlgorithm";

describe('pathFindingAlgorithm', () => {
    it('should find initial locations', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'g';
        expect(pathFindingAlgorithm(grid, input)).toEqual([[{x: 1, y: 2}], [{x: 2, y: 1}]])
    });
    it('should return a path of two letters long', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'gf';
        expect(pathFindingAlgorithm(grid, input)).toEqual([[{x: 1, y: 2}, {x: 1, y: 1}], [{x: 2, y: 1}, {x: 1, y: 1}]])
    });
    it('should return a path of three letters long', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'gfb';
        expect(pathFindingAlgorithm(grid, input)).toEqual([
            [
                {x: 1, y: 2}, {x: 1, y: 1}, {x: 0, y: 1}
            ],
            [
                {x: 2, y: 1}, {x: 1, y: 1}, {x: 0, y: 1}
            ]
        ])
    });
    it('should return a path of four letters long', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'gfba';
        expect(pathFindingAlgorithm(grid, input)).toEqual([
            [
                {x: 1, y: 2}, {x: 1, y: 1}, {x: 0, y: 1}, {x: 0, y: 0}
            ],
            [
                {x: 2, y: 1}, {x: 1, y: 1}, {x: 0, y: 1}, {x: 0, y: 0}
            ]
        ])
    });
    it('should account for multiple paths', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'okg';
        expect(pathFindingAlgorithm(grid, input)).toEqual([
            [
                {x: 3, y: 2}, {x: 2, y: 2}, [{x: 1, y: 2}, {x: 2, y: 1}]
            ],
        ])
    });
    it('should handle multiple paths with extra letter after', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'okgf';
        expect(pathFindingAlgorithm(grid, input)).toEqual([
            [
                {x: 3, y: 2}, {x: 2, y: 2}, [{x: 1, y: 2}, {x: 2, y: 1}], {x: 1, y: 1}
            ],
        ])
    });
    // it('should not backtrack', () => {
    //     const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
    //     const input = 'gfg';
    //     expect(pathFindingAlgorithm(grid, input)).toEqual([
    //         [
    //             {x: 1, y: 2}, {x: 1, y: 1}, {x: 2, y: 1}
    //         ],
    //         [
    //             {x: 2, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}
    //         ]
    //     ])
    // });

    // it('should remove invalid paths', () => {
    //     const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
    //     const input = 'okgh';
    //     expect(pathFindingAlgorithm(grid, input)).toEqual([
    //         [
    //             {x: 3, y: 2}, {x: 2, y: 2}, {x: 1, y: 2}, {x: 1, y: 3}
    //         ],
    //     ])
    // });

    it('should return empty array string is not valid', () => {
        const grid = generateGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P"]);
        const input = 'oka';
        expect(pathFindingAlgorithm(grid, input)).toEqual([])
    })
});