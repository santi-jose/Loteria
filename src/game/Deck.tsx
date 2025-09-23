// The deck is a class which represents the 54
// card Loteria deck. 
import { Card } from './Card';
import cardsData from '../data/cards.json';

export class Deck{
    deck: Card[]; // deck represented by array of Card

    constructor(){
        // initialize deck as empty array
        this.deck = [];
        
        // copy cards from cardData into empty deck array
        for(const c of cardsData){
            this.deck.push(new Card(c.id, c.name, c.description, c.image));
        }
    }

    // count getter: Tells user the deck length
    get count(): number{
        return this.deck.length;
    }

    // shuffle function: shuffles the cards in the deck array
    shuffle(): void{
        for(let i = this.deck.length - 1; i > 0; i--){
            // pick random card from 0 to deck.length-1 to put at top of deck
            // Math.random() returns number between 0 (inclusive) and 1 (exclusive)
            // use i as length of deck remaining to shuffle, but add 1 since upper 
            // bound of Math.random is exclusive
            // use Math.floor to achieve integer values for referencing deck array. 
            // -> j is a random number from 0 to deck length - 1
            const j = Math.floor(Math.random() * (i + 1));

            // swap Card at index i, back of deck, with card at random index j
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];

            // decrement the i index denoting the top of the back of the last element in the deck array
        }
    }

    // draw function: removes and returns the card on top of the deck
    draw(): Card | undefined{
        return this.deck.pop();
    }
}


