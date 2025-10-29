import { describe, it, expect } from "vitest";

import { Player } from "../game/Player";

describe('Player', () => {
    it('confirms Player initialization', () => {
        const player = new Player('Jose');

        expect(player.getName()).toBe('Jose');
        expect(player.getCalledLoteria()).toBe(false);
        expect(player.getBoard()).toBeTypeOf('object');
    });
    it('checks toggleCard functionality throughout board', () => {
        const player = new Player('Jose');
        
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                expect(player.getBoard().isMarked(i, j)).toBe(false);
                player.toggleCard(i, j);
                expect(player.getBoard().isMarked(i, j)).toBe(true);
                player.toggleCard(i, j);
                expect(player.getBoard().isMarked(i, j)).toBe(false);
            }
        }
    });
    it('checks callLoteria functionality', () => {
        const player = new Player('Jose');

        expect(player.getCalledLoteria()).toBe(false);
        player.callLoteria();
        expect(player.getCalledLoteria()).toBe(true);
    });
});