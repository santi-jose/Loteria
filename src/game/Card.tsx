// The Card class is a representation of the 54
// different cards in the Loteria deck.
export class Card{
    private id: number;
    private name: string;
    private description: string;
    private image: string;

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

    // getter functions to access data safely
    get ID(): number{
        return this.id;
    }

    get Name(): string{
        return this.name;
    }

    get Description(): string{
        return this.description;
    }

    get Image(): string{
        return this.image;
    }
}

