import { BoardTile } from "./BoardTile";
import { Deck } from "./Deck";
import { Card } from "./Card";

// string union used to denote the type of win condition met on the Board
type WinType = "ROW" | "COLUMN" | "DIAGONAL" | "POZO" | "FULL";

// WinPattern object which depicts the winning pattern on the board
// includes the WinType, indices, and Cards used in the win pattern
type WinPattern = {
  winType: WinType;
  indices: [number, number][];
  cards: Card[];
};

export class Board {
  private grid: BoardTile[][];

  // static variable storing all different winning patterns to check
  // in the board state
  private static allPatterns: WinPattern[] = [
    // ROW
    {
      winType: "ROW",
      indices: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      cards: [],
    },
    {
      winType: "ROW",
      indices: [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
      ],
      cards: [],
    },
    {
      winType: "ROW",
      indices: [
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
      ],
      cards: [],
    },
    {
      winType: "ROW",
      indices: [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3],
      ],
      cards: [],
    },
    // COLUMN
    {
      winType: "COLUMN",
      indices: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      cards: [],
    },
    {
      winType: "COLUMN",
      indices: [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
      ],
      cards: [],
    },
    {
      winType: "COLUMN",
      indices: [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      cards: [],
    },
    {
      winType: "COLUMN",
      indices: [
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
      ],
      cards: [],
    },
    // DIAGONAL
    {
      winType: "DIAGONAL",
      indices: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      cards: [],
    },
    {
      winType: "DIAGONAL",
      indices: [
        [0, 3],
        [1, 2],
        [2, 1],
        [3, 0],
      ],
      cards: [],
    },
    // POZO
    {
      winType: "POZO",
      indices: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [0, 1],
        [0, 2],
        [1, 1],
        [1, 2],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [0, 2],
        [0, 3],
        [1, 2],
        [1, 3],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [1, 0],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [1, 1],
        [1, 2],
        [2, 1],
        [2, 2],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [1, 2],
        [1, 3],
        [2, 2],
        [2, 3],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [2, 0],
        [2, 1],
        [3, 0],
        [3, 1],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [2, 1],
        [2, 2],
        [3, 1],
        [3, 2],
      ],
      cards: [],
    },
    {
      winType: "POZO",
      indices: [
        [2, 2],
        [2, 3],
        [3, 2],
        [3, 3],
      ],
      cards: [],
    },
    // FULL
    {
      winType: "FULL",
      indices: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 3],
      ],
      cards: [],
    },
  ];

  constructor() {
    // initialize column array
    this.grid = [];
    const tempDeck = new Deck();
    tempDeck.shuffle();

    // iterate through rows
    for (let i: number = 0; i < 4; i++) {
      this.grid[i] = []; // define row to iterate

      // iterate through row elements
      for (let j: number = 0; j < 4; j++) {
        // assign BoardTile to grid space i,j
        this.grid[i][j] = new BoardTile(tempDeck.draw()!);
      }
    }
  }

  // function checks for winning patterns on the board
  // returns an array of WinPattern objects
  checkPatterns(): WinPattern[] {
    // initialize empty WinPattern array to return
    let winningPatterns: WinPattern[] = [];

    // iterate through the winning patterns inside allPatterns array
    for (const winPattern of Board.allPatterns) {
      // define WinPattern to use to store current winning pattern
      const currentPattern: WinPattern = {
        winType: winPattern.winType,
        indices: winPattern.indices,
        cards: [],
      };

      // iterate through pattern indices
      const indices = winPattern.indices;
      let allMarked = true; // flag which tells us if we have a winning pattern
      for (const index of indices) {
        const tile = this.grid[index[0]][index[1]];
        // check if tile  at given indices in grid is not marked
        if (!tile.isMarked) {
          allMarked = false;
          break; // break if so
        }
        currentPattern.cards.push(tile.Card); // otherwise  push current Card
        // into the currentPattern WinPattern
      }

      // if allMarked is still true
      if (allMarked) {
        winningPatterns.push(currentPattern); // push currentPattern onto winningPatterns array
      }
    }
    return winningPatterns;
  }

  // toggle the current tile marked state given the indices of the tile
  // i: row, j: column
  toggle(i: number, j: number): void{
    this.grid[i][j].toggle();
  }

  // given indices for row and column (i, j), returns
  // the BoardTile at the indices within the grid
  getTile(i: number, j: number): BoardTile{
    return this.grid[i][j];
  }

  // given indices for row and column (i, j), returns
  // the boolean value representing if the tile is marked
  // false for unmarked and true for marked.
  isMarked(i: number, j: number): boolean{
    return this.grid[i][j].isMarked;
  }
}
