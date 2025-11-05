import { Board } from "./Board";

export class Player{
    private name: string;
    private board: Board;
    private calledLoteria: boolean;

    constructor(name: string){
        this.name = name;
        this.board = new Board();
        this.calledLoteria = false;
    }

    // toggleCard function takes row (i) and column (j)
    // indices and toggles the Card at the given indices
    toggleCard(i: number, j: number): void{
        this.board.toggle(i, j);
    }

    // callLoteria function triggers the calledLoteria
    // boolean flag to true
    callLoteria(): void{
        this.calledLoteria = true;
    }

    // getters
    getName(): string{
        return this.name;
    }

    getBoard(): Board{
        return this.board;
    }

    getCalledLoteria(): boolean{
        return this.calledLoteria;
    }
}