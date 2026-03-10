import { Card } from './Card';

export class BoardTile{
    private card: Card;
    private marked: boolean = false;
    private active: boolean = true;

    constructor(card: Card){
        this.card = card;
    }

    // toggle function sets the marked boolean for
    // this tile from false to true or true to false
    toggle(): void{
        if(this.Active){ // toggle only if the tile is active
            this.marked = !this.marked;
        }
    }

    // function to set this tile to inactive as a penalty
    deactivate(): void{
        this.active = false;
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

    // return whether or not the tile is active
    get Active(): boolean{
        return this.active;
    }
}

