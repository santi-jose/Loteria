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

        // advance all timers
        vi.runAllTimers();

        // check that the boardTiles in row0 are marked
        for(let j = 0; j < 4; j++){
            expect(salo.Board.getTile(0, j).isMarked).toBe(true);
        }

        // one win pattern should be recorded after marking row0
        expect(salo.Board.checkPatterns().length).toBe(1);

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

    it("Checks that playRound() function properly calls attemptMark and attemptLoteria().", () => {
        // use fake timers
        vi.useFakeTimers();

        // initialize AIPlayer
        // 100 % mark accuracy
        // 100 % of pace time taken to mark Board
        // 0 & Loteria Accuracy
        // 100% of pace time taken to call Loteria
        const salo = new AIPlayer('Salo', 100, 100, 100, 100);
        const row0 = [];

        // create array of row0
        for(let j = 0; j < 4; j++){
            row0.push(salo.Board.getTile(0, j).Card);
        }

        for(const card of row0){
            salo.playRound(card, 10);
        }

        vi.runAllTimers();

        // check that the AIPlayer's board was marked in the right places
        for(let j = 0; j < 4; j++){
            expect(salo.Board.getTile(0, j).isMarked).toBe(true);
        }

        // salo.playRound(row0[0], 10);
        // vi.runAllTimers();

        // LoteriaAccuracy = 0 -> calledLoteria flag is false
        expect(salo.Board.checkPatterns().length).toBe(1);
        expect(salo.CalledLoteria).toBe(true);

        vi.useRealTimers();
    });
});