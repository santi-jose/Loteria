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
    it('toggles the BoardTile on and off to validate winning patterns', () => {
        const board = new Board();
        let winningPatterns = [];

        console.log('Forward');

        // iterate through rows
        for(let i = 0; i < 4; i++){
            // iterate through columns
            for(let j = 0; j < 4; j++){
                // print current 
                console.log(`[i,j]: [${i}, ${j}]`);

                // toggle current tile 
                board.toggle(i, j);

                // check patterns
                winningPatterns = board.checkPatterns();

                // print length of winningPatterns
                console.log(`Current winningPatterns length: ${winningPatterns.length}`);
            }
        }

        // iterate through board backwards
        // iterate backwards through columns
        console.log('Backwards');
        for(let i = 3; i >= 0 ; i--){

            // iterate backwards through rows
            for(let j = 3; j >= 0; j--){
                // print current tile
                console.log(`[i,j]: [${i},${j}]`);

                // toggle current tile
                board.toggle(i, j);

                // check patterns
                winningPatterns = board.checkPatterns();

                // print current winningPatterns length
                console.log(`Current winningPatterns length: ${winningPatterns.length}`);
            }
        }
    });
    // test each WinPattern within static field allPatterns
    it.each(Board.allPatterns)(`detects %s correctly`, (WinPattern) => {
        const board = new Board();

        // check empty checkPatterns() return before toggling
        if(WinPattern.winType !== 'FULL'){
            expect(board.checkPatterns().length).toBe(0);
        }

        // iterate through indices and toggle them
        WinPattern.indices.forEach(([i, j]) => {
            if(WinPattern.winType !== 'FULL'){
                expect(board.checkPatterns().length).toBe(0);
            }
            board.toggle(i, j);
        });

        if(WinPattern.winType === 'FULL'){ // if the winType is FULL
            expect(board.checkPatterns().length).toBe(Board.allPatterns.length); // length of checkPatterns should return 20
        }else{
            expect(board.checkPatterns().length).toBe(1); // length of checkPatterns should be 1
            expect(board.checkPatterns()[0].winType).toBe(WinPattern.winType); // ensure winType of recorded pattern matches current WinPattern 
        }
    });
});