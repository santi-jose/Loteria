// The Card class is a representation of the 54
// different cards in the Loteria deck.
export class Card{
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly image: string;

    constructor(id: number, 
                name: string, 
                description: string,
                image: string
               ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

