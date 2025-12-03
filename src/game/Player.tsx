import { Board } from "./Board";

export class Player{
    private name: string;
    private board: Board;
    private calledLoteria: boolean;
    onLoteria?: () => void; // callback function

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
        this.onLoteria?.();
    }

    // getters
    get Name(): string{
        return this.name;
    }

    get Board(): Board{
        return this.board;
    }

    get CalledLoteria(): boolean{
        return this.calledLoteria;
    }
}