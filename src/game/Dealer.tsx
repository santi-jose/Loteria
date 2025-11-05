// The Dealer class represents the Dealer agent which handles all 
// the game materials with handling the Cards.
import { Deck } from "./Deck";
import { Card } from "./Card";

export class Dealer{
    private deck: Deck;
    private cardsDrawn: Deck;

    constructor(){
        this.deck = new Deck();
        this.deck.shuffle();
        this.cardsDrawn = new Deck(false);
    }

    // function returns the Card from the top of the deck
    // also adds the card to the drawnCard deck
    announceCard(): Card | undefined{
        let drawnCard = this.deck.draw();
        if(drawnCard !== undefined){
            this.cardsDrawn.place(drawnCard);
        }
        return drawnCard;
    }

    // reset the Dealer decks to new.
    reset(): void{
        this.deck = new Deck();
        this.deck.shuffle();
        this.cardsDrawn = new Deck(false);
    }

    // getters
    getDeck(): Deck{
        return this.deck;
    }

    getCardsDrawn(): Deck{
        return this.cardsDrawn;
    }
}