import { describe, it, expect,  } from "vitest";

import { Dealer } from "../game/Dealer";

describe('Dealer', () => {
    it('Initializes the deck and cardsDrawn field upon creation of Dealer', () => {
        let deckCount = 54;
        let cardsDrawnCount = 0;
        const dealer = new Dealer();
        expect(dealer.Deck.count).toBe(deckCount);
        expect(dealer.CardsDrawn.count).toBe(cardsDrawnCount);

        for(let i = 0; i < 54; i++){
            dealer.announceCard();
            deckCount--;
            cardsDrawnCount++;
            expect(dealer.Deck.count).toBe(deckCount);
            expect(dealer.CardsDrawn.count).toBe(cardsDrawnCount);
        }

        dealer.reset();
        expect(dealer.Deck.count).toBe(54);
        expect(dealer.CardsDrawn.count).toBe(0);
    });
})