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

    announceCard(): Card | undefined{
        let drawnCard = this.deck.draw();
        if(drawnCard !== undefined){
            this.cardsDrawn.place(drawnCard);
        }
        return drawnCard;
    }

    reset(): void{
        this.deck = new Deck();
        this.deck.shuffle();
        this.cardsDrawn = new Deck(false);
    }

    getDeck(): Deck{
        return this.deck;
    }

    getCardsDrawn(): Deck{
        return this.cardsDrawn;
    }
}