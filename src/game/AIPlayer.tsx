import { Player } from "./Player";
import { Card } from "./Card";

export class AIPlayer extends Player{
    private markAccuracy: number; // a number which determines the AIPlayers markAccuracy in percentage 1-100
    private markDelay: number; // a number which determines the AIPlayer's markDelay in percentage 1-100
    private loteriaAccuracy: number; // a number which determines the AIPlayer's loteriaAccuracy in percentage 1-100
    private loteriaDelay: number; // a number which determines the AIPlayer's loteriaRection in percentage 1-100

    constructor(name: string, 
                markAcc: number, 
                markReact: number, 
                loteriaAcc: number, 
                loteriaReact: number){
        super(name);

        this.markAccuracy = markAcc;
        this.markDelay = markReact;
        this.loteriaAccuracy = loteriaAcc;
        this.loteriaDelay = loteriaReact;
        if(this.loteriaDelay < this.markDelay){ // clamp value of loteriReaction
            this.loteriaDelay = this.markDelay;
        }
    }

    // this function uses the markAccuracy and markDelay
    // member variables to calculate whether or not the AIPlayer
    // accurately marks their board, and how long they take to mark
    attemptMark(announcedCard: Card, pace: number){
        // get a random number from 1 to 100
        // Math.random() * 100 -> random floating point number from [0, 100)
        // Math.floor(Math.random()*100) -> random integer from [0, 100)
        // Math.floor((Math.random()*100)) + 1 -> random integer from [1, 101) -> [1, 100]
        const randomPercent = Math.floor(Math.random()*100) + 1;

        // check if our random number falls under the percentage that dictates
        // a hit for the AIPlayer
        // ex.) markAccuracy = 70 -> 70& of the time, the AIPlayer marks the right tile
        // therefore -> if the randomPercent we calculate above is within the range [1, 70],
        // we consider that a hit. And the AIPlayer marks their board. Otherwise the player does
        // nothing
        if(randomPercent <= this.markAccuracy){ // check if AIPLayer marks the tile
            // mark the tile given the markDelay time
            // iterate through the board
            outerLoop: for(let i = 0; i < 4; i ++){
                for(let j = 0; j < 4; j++){
                    if(announcedCard.ID === this.Board.getTile(i, j).Card.ID){ // if the announcedCard matches current tile's card
                        // mark the card with a delay
                        setTimeout(() => {
                            this.Board.getTile(i, j).toggle(); // toggle mark state of tile
                        }, Math.floor(this.markDelay * pace * 1000));
                        break outerLoop; // break out of for loops 
                    }
                }
            }
        } // else do nothing
    }

    // this function uses the loteriaAccuracy, loteriaDelay
    // member variables to calculate whether or not the AIPlayer
    // accurately calls Loteria, and how long they take to call
    attemptLoteria(pace: number){
        // calculate the roll to attemptLoteria
        const randomPercent = Math.floor(Math.random()*100) + 1;
        
        // check if the Loteria call is valid
        if(randomPercent <= this.loteriaAccuracy){
            // set timeout for attempting a call to Loteria this round
            setTimeout(() => {
                // if we have a winning pattern in
                if(this.Board.checkPatterns().length > 0){
                    this.callLoteria();
                }
            }, Math.floor(this.loteriaDelay * pace * 1000));
        }
    }

    // this function calls attemptMark and attemptLoteria to simulate
    // the AIPlayer playing a round. 
    // @params: 
    // card: Card that was announced by the Dealer
    // pace: number that determines the duration of each round
    playRound(announcedCard: Card, pace: number){
        this.attemptMark(announcedCard, pace);
        this.attemptLoteria(pace);
    }
}