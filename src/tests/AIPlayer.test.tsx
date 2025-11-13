import { describe, it, expect, vi } from "vitest";
import { AIPlayer } from "../game/AIPlayer";

describe('AIPlayer', () => {
    it('Checks for proper initialization of AIPLayer fields accuracies and reactions.', () => {
        const salo = new AIPlayer('Salo', 50, 50, 50, 50);

        expect(salo.Name).toBe('Salo');
        expect(salo.CalledLoteria).toBe(false);
        expect(salo.Board).toBeTypeOf('object');
    });

    it('Checks that attemptMark() function properly toggles the Board given the input card. ', () => {
        // use fake timers
        vi.useFakeTimers();

        // create a AIPlayer object, salo
        const salo = new AIPlayer('Salo', 100, 100, 100, 100);

        // store cards within the row 0 of our Player's board
        const row0 = [];

        // store Cards in row0 in array
        for(let j = 0; j < 4; j++){
            row0.push(salo.Board.getTile(0, j).Card);
        }
        
        for(const card of row0){
            // see if the card in iteration is in the board
            salo.attemptMark(card, 10);
        }

        // Loteria call should be false
        expect(salo.CalledLoteria).toBe(false);
        expect(salo.Board.checkPatterns().length).toBe(0);

        // advance all timers
        vi.runAllTimers();

        // check that the boardTiles in row0 are marked
        for(let j = 0; j < 4; j++){
            expect(salo.Board.getTile(0, j).isMarked).toBe(true);
        }

        vi.useRealTimers();
    });

    it("Checks that attemptLoteria() function properly functions given the AIPlayer's board state", () => {
        // use fake timers
        vi.useFakeTimers();

        // define AIPlayer salo
        const salo = new AIPlayer('Salo', 100, 10, 100, 10);

        // Loteria call should be false
        expect(salo.CalledLoteria).toBe(false);
        expect(salo.Board.checkPatterns().length).toBe(0);

        // toggle col0 in board
        for(let i = 0; i < 4; i++){
            salo.Board.getTile(i, 0).toggle();
        }

        // Loteria call still false, but winpattern should have 1
        expect(salo.CalledLoteria).toBe(false);
        expect(salo.Board.checkPatterns().length).toBe(1);

        // attempt a call to Loteria
        salo.attemptLoteria(10);

        // advance all timers
        vi.runAllTimers();
        
        // Loteria call now true, but winpattern should have 1
        expect(salo.CalledLoteria).toBe(true);
        expect(salo.Board.checkPatterns().length).toBe(1);

        vi.useRealTimers();
    });
});