import { Board } from "./Board";

export class Player{
    private name: string;
    private board: Board;
    private calledLoteria: boolean;

    constructor(Name: string){
        this.name = Name;
        this.board = new Board();
        this.calledLoteria = false;
    }

    toggleCard(i: number, j: number): void{
        this.board.toggle(i, j);
    }

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