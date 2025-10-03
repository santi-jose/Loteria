import { BoardTile } from "./BoardTile";
import { Deck } from "./Deck";
import { Card } from "./Card"

// string union used to denote the type of win condition met on the Board
type WinType = "ROW" | "COLUMN" | "DIAGONAL" | "POZO" | "FULL";

// WinPattern object which depicts the winning pattern on the board
// includes the WinType, positions, and Cards used in the win pattern
type WinPattern = {
    winType: WinType;
    positions: [number, number][];
    cards: Card[];
}


export class Board{
    private grid: BoardTile[][];

    // static variable storing all different winning patterns to check
    // in the board state
    private static allPatterns: WinPattern[] = [
        // ROW
        {winType: "ROW", positions: [[0, 0], [0, 1], [0, 2], [0, 3]], cards: [] },
        {winType: "ROW", positions: [[1, 0], [1, 1], [1, 2], [1, 3]], cards: [] },
        {winType: "ROW", positions: [[2, 0], [2, 1], [2, 2], [2, 3]], cards: [] },
        {winType: "ROW", positions: [[3, 0], [3, 1], [3, 2], [3, 3]], cards: [] },
        // COLUMN
        {winType: "COLUMN", positions: [[0, 0], [1, 0], [2, 0], [3, 0]], cards: [] },
        {winType: "COLUMN", positions: [[0, 1], [1, 1], [2, 1], [3, 1]], cards: [] },
        {winType: "COLUMN", positions: [[0, 2], [1, 2], [2, 2], [3, 2]], cards: [] },
        {winType: "COLUMN", positions: [[0, 3], [1, 3], [2, 3], [3, 3]], cards: [] },
        // DIAGONAL
        {winType: "DIAGONAL", positions: [[0, 0], [1, 1], [2, 2], [3, 3]], cards: [] },
        {winType: "DIAGONAL", positions: [[0, 3], [1, 2], [2, 1], [3, 0]], cards: [] },
        // POZO
        {winType: "POZO", positions: [[0, 0], [0, 1], [1, 0], [1, 1]], cards: [] },
        {winType: "POZO", positions: [[0, 1], [0, 2], [1, 1], [1, 2]], cards: [] },
        {winType: "POZO", positions: [[0, 2], [0, 3], [1, 2], [1, 3]], cards: [] },
        {winType: "POZO", positions: [[1, 0], [1, 1], [2, 0], [2, 1]], cards: [] },
        {winType: "POZO", positions: [[1, 1], [1, 2], [2, 1], [2, 2]], cards: [] },
        {winType: "POZO", positions: [[1, 2], [1, 3], [2, 2], [2, 3]], cards: [] },
        {winType: "POZO", positions: [[2, 0], [2, 1], [3, 0], [3, 1]], cards: [] },
        {winType: "POZO", positions: [[2, 1], [2, 2], [3, 1], [3, 2]], cards: [] },
        {winType: "POZO", positions: [[2, 2], [2, 3], [3, 2], [3, 3]], cards: [] },
        // FULL
        {winType: "FULL", positions: [[0, 0], [0, 1], [0, 2], [0, 3],
                                      [1, 0], [1, 1], [1, 2], [1, 3],
                                      [2, 0], [2, 1], [2, 2], [2, 3],
                                      [3, 0], [3, 1], [3, 2], [3, 3]],
                                    cards: [] }
    ];
    
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

    // function checks for winning patterns on the board
    // returns an array of WinPattern objects
    checPatterns(): WinPattern[]{

        return [];
    }
}

