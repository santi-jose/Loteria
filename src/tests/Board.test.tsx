import { describe, it, expect } from 'vitest';

import { Board } from '../game/Board';

describe('Board', () => {
    it('initializes a Board with 16 different unmarked cards', () => {
        const board = new Board();
        const seenIDs = new Set<number>();

        // iterate through rows
        for(let i = 0; i < 4; i++){
            // iterate through columns
            for(let j = 0; j < 4; j++){
                // store tile to test
                const tile = board.getTile(i, j);

                expect(tile.isMarked).toBe(false);
                expect(tile.Card).toBeDefined();
                expect(tile.Card.Name).toBeTypeOf('string');
                expect(tile.Card.Description).toBeTypeOf('string');
                expect(tile.Card.ID).toBeTypeOf('number');

                // check for duplicate cards
                expect(seenIDs.has(tile.Card.ID)).toBe(false);
                seenIDs.add(tile.Card.ID);
            }
        }

        expect(seenIDs.size).toBe(16);
    });
    it('toggles a BoardTile given the row and column indices as input (i, j)', () => {
        const board = new Board();

        [[0, 0], [1, 1], [2, 2], [3, 3]].forEach(([i, j]) =>{
            expect(board.isMarked(i, j)).toBe(false);
            board.toggle(i, j);
            expect(board.isMarked(i,j )).toBe(true);
            board.toggle(i, j);
            expect(board.isMarked(i, j)).toBe(false);
        });
    });
});