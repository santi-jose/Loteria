import { describe, it, expect } from 'vitest';
import { Deck } from '../game/Deck';
import cardsData from '../data/cards.json';

describe('Deck', () => {
    // test Deck initialization
    it('should initialize with 54 cards', () => {
        const deck = new Deck();
        expect(deck.count).toBe(54);
    });

    // test draw function
    it('should draw a card and reduce the deck size', () =>{
        const deck = new Deck();
        const initialCount = deck.count;

        const drawnCard = deck.draw();

        expect(drawnCard).toBeDefined();
        expect(deck.deck.length).toBe(initialCount - 1);
    });

    // test the card contents of the Card at end of deck array
    it("should match the Card's drawn data to the cardsJSON data used for initialization. From ID 54 to 1", () => {
        const deck = new Deck();

        for(let i = cardsData.length - 1; i >= 0 ; i--){
            const cardData = cardsData[i];
            const drawnCard = deck.draw();

            expect(drawnCard?.id).toBe(cardData['id']);
            expect(drawnCard?.name).toBe(cardData['name']);
            expect(drawnCard?.description).toBe(cardData['description']);
            expect(drawnCard?.image).toBe(cardData['image']);
        }
    });

    // test undefined for empty deck
    it('should return undefined if drawing from empty deck', () => {
        const deck = new Deck();
        for(let i = 0; i < cardsData.length; i++){
            deck.draw();
        }

        expect(deck.draw()).toBeUndefined();
    });
});