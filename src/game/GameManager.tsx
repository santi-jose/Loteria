import { Dealer } from "./Dealer";
import { Player } from "./Player";
import { AIPlayer } from "./AIPlayer";
import { GameConfig } from "./GameConfig";
import { Card } from "./Card";

export class GameManager{
    private state: string;
    private dealer: Dealer;
    private players: Player[] = [];
    private config: GameConfig;
    private currentCard!: Card;
    private winner: Player | undefined =  undefined;

    constructor(config: GameConfig){
        this.state = "standby";
        this.dealer = new Dealer();
        this.config = config;
        this.dealer.Deck.shuffle(); // shuffle deck
        
        // create and push user player into Player array
        this.players.push(new Player("Player 1"))

        // initialize AIPlayers with random values
        // and push onto the Players array
        for(let i = 0; i < this.config.AICount; i++){
            this.players.push(new AIPlayer(`COM ${i}`, 
                              this.randomPercent(), 
                              this.randomPercent(),
                              this.randomPercent(),
                              this.randomPercent()
                              ));                 
        }
    }

    gameLoop(): void{
        switch(this.state){
            // standby phase where we draw the card for the round. 
            case "standby":
                const currentCard = this.dealer.announceCard();
                console.log(`Current Card in round: ${currentCard}`);

                // if we receive undefined
                // we ran out of cards
                if(currentCard === undefined){
                    this.state = "gameover"; // set state to gameover
                    break; // break out of case play
                }
                this.currentCard = currentCard; // save currentCard to GameManager private variable

                // queue next standby phase
                setTimeout( () => {
                    this.state = "standby";
                }, this.config.Pace * 1000);

                this.state = "play"; // set state to play
                break;
            case "play":
                // play round
                
                // iterate through AIPlayers and play a round
                for(const player of this.players){
                    if(player instanceof AIPlayer){
                        player.playRound(this.currentCard, this.config.Pace);
                    }
                }

                // poll for the Loteria calls of players
                for(const player of this.players){
                    if(player.CalledLoteria){
                        // call function to validate loteria
                        this.validateLoteria(player);
                    }
                }
                break;
            case "gameover":
                if(this.winner === undefined){ // if we have no winner
                    console.log(`Game Over. Deck ran out before a winner could be decided. Tie game!`);
                }else{
                    console.log(`Game Over. Player ${this.winner.Name} wins!`);
                }
                break;
        }
    }

    validateLoteria(player: Player): void{
        // iterate through array of patterns within player Board
        for(const pattern of player.Board.checkPatterns()){
            let valid = true;
            for(const card of pattern.cards){
                // if the card is not included in the cards seen deck 
                if(!this.dealer.CardsDrawn.Cards.includes(card)){
                    // current pattern is not valid
                    valid = false;
                    break; // break to check next pattern
                }
            }
            // if the full pattern exists in the CardsDrawn deck
            if(valid === true){
                this.winner = player; // save winner to 
                this.state = "gameover"; // go to state gameover
                break;
            }
        }
        // if we make it out of the loop without going to state gameover
        if(this.state !== "gameover"){
             // incur penalty for player
            console.log("Invalid Loteria, Penalty applied.");
            // apply penalty to random tile in palyer's board
             const i = this.randomIndex();
             const j = this.randomIndex();
             player.Board.getTile(i, j).deactivate();
        }
    }

    // helper function to return random number from 1 to 100
    private randomPercent(): number{
        return Math.floor((Math.random() * 100) + 1);
    }

    // helper function to return a random index value from 0 to 3
    private randomIndex(): number{
        return Math.floor((Math.random() * 4)); 
    }
}