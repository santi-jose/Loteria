import { Player } from "./Player";
import { Card } from "./Card";

export class AIPLayer extends Player{
    private markAccuracy: number; // a number which determines the AIPlayers markAccuracy in percentage 0-100
    private markReaction: number; // a number which determines the AIPlayer's markReaction in percentage 0-100
    private loteriaAccuracy: number; // a number which determines the AIPlayer's loteriaAccuracy in percentage 0-100
    private loteriaReaction: number; // a number which determines the AIPlayer's loteriaRection in percentage 0-1000

    constructor(name: string, 
                markAcc: number, 
                markReact: number, 
                loteriaAcc: number, 
                loteriaReact: number){
        super(name);

        this.markAccuracy = markAcc;
        this.markReaction = markReact;
        this.loteriaAccuracy = loteriaAcc;
        this.loteriaReaction = loteriaReact;
    }

    // this function uses the markAccuracy and markReaction
    // member variables to calculate whether or not the AIPlayer
    // accurately marks their board, and how long they take to mark
    attmmptMark(pace: number){
        
    }

    // this function uses the lloteriaAccuracy, loteriaReaction
    // member variables to calculate whether or not the AIPlayer
    // accurately calls Loteria, and how long they take to call
    attemptLoteria(pace: number){

    }

    // this function calls attemptMark and attemptLoteria to simulate
    // the AIPlayer playing a round. It 
    // @params: 
    // card: Card that was announced by the Dealer
    // pace: number that determines the duration of each round
    playRound(card: Card, pace: number){

    }
}