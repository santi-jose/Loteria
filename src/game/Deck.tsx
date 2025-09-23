// The deck is a class which represents the 54
// card Loteria deck. 
import { Card } from './Card';
import cardsData from '../data/cards.json';

console.log(cardsData);

export class Deck{
    deck: Card[];

    constructor(){
        // copy cardsData into deck array
        this.deck = [];
        
       for(const c of cardsData){
        this.deck.push(new Card(c.id, c.name, c.description, c.image));
       }
    }

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

    draw(): Card | undefined{
        return this.deck.pop();
    }
}


