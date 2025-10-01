import { BoardTile } from "./BoardTile";
import { Deck } from "./Deck";

export class Board{
    private grid: BoardTile[][];
    
    constructor(){
        // initialize column array 
        this.grid = [];
        const tempDeck = new Deck();
        tempDeck.shuffle();

        // iterate through rows
        for(let i: number = 0; i < 4; i++){
            this.grid[i] = []; // define row to iterate
            
            // iterate through row elements
            for(let j: number = 0; j < 4; j++){
                // assign BoardTile to grid space i,j
                this.grid[i][j] = new BoardTile(tempDeck.draw()!);
            }
        }
    }

    
}