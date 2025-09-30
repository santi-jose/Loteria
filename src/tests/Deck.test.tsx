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
        expect(deck.count).toBe(initialCount - 1);
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
    it('should return undefined when drawing from empty deck', () => {
        const deck = new Deck();
        for(let i = 0; i < cardsData.length; i++){
            deck.draw();
        }

        expect(deck.draw()).toBeUndefined();
    });

    // test shuffle return full deck
    it('shuffle keeps the same number of cards', () => {
        const deck = new Deck();
        const before = deck.count;
        deck.shuffle();

        expect(deck.count).toBe(before);
    });

    // test 54 unique cards included in shuffled deck
    it('shuffle keeps all the same cards', () => {
        const deck = new Deck();
        const before = [...deck.cards];
        deck.shuffle();
        const after = [...deck.cards];

        expect(new Set(after)).toEqual(new Set(before));
    });

    // test that the shuffle function changes the order of the deck
    it('shuffle produces different order most of the time', () => {
        const deck = new Deck();
        const before = [...deck.cards];
        deck.shuffle();
        const after = [...deck.cards];

        const isDifferent = before.some((card, i) => card !== after[i]);
        expect(isDifferent).toBe(true);
    });
});