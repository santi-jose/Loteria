import { Card } from './Card';

export class BoardTile{
    card: Card;
    marked: boolean = false;

    constructor(card: Card){
        this.card = card;
    }

    // toggle function sets the marked boolean for
    // this tile from false to true or true to false
    toggle(): void{
        this.marked = !this.marked;
    }

    // isMarked function returns the boolean value 
    // keeping track of whether or not the card tile is marked
    // marked
    get isMarked(): boolean{
        return this.marked;
    }

    // return the card belonging to this BoardTile
    get Card(): Card{
        return this.card;
    }
}

