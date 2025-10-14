import { describe, it, expect } from 'vitest';

import { Board } from '../game/Board';

describe('Board', () => {
    it('initializes a Board with 16 different unmarked cards', () => {
        const board = new Board();

        // iterate through rows
        for(let i = 0; i < 4; i++){
            // iterate through columns
            for(let j = 0; j < 4; j++){
                console.log(`i: ${i}, j: ${j}`);
                console.log(board.Tile(i, j).Card.Name);
                console.log(board.Tile(i, j).Card.ID)
                console.log(board.Tile(i, j).Card.Description);
                console.log(board.Tile(i, j).Card.Image);
                expect(board.Tile(i,j).isMarked).toBe(false);
            }
        }
    });
    it('toggles a BoardTile given the row and column indices as input (i, j)', () => {
        const board = new Board();

        // check that board is unmarked at indices to be toggled
        expect(board.isMarked(0, 0)).toBe(false);
        expect(board.isMarked(1, 1)).toBe(false);
        expect(board.isMarked(2, 2)).toBe(false);
        expect(board.isMarked(3, 3)).toBe(false);

        // mark tiles (0, 0) (1, 1) (2, 2) and (3, 3)
        board.toggle(0, 0);
        board.toggle(1, 1);
        board.toggle(2, 2);
        board.toggle(3, 3);

        // check that board is marked at toggled indices
        expect(board.isMarked(0, 0)).toBe(true);
        expect(board.isMarked(1, 1)).toBe(true);
        expect(board.isMarked(2, 2)).toBe(true);
        expect(board.isMarked(3, 3)).toBe(true);
    });
});