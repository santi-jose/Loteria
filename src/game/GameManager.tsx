import { Dealer } from "./Dealer";
import { Player } from "./Player";
import { AIPlayer } from "./AIPlayer";
import { GameConfig } from "./GameConfig";

export class GameManager{
    private state: string;
    private dealer: Dealer;
    private players: Player[] = [];
    private config: GameConfig;

    constructor(config: GameConfig){
        this.state = "start";
        this.dealer = new Dealer();
        this.config = config;
        
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

    gameLoop(state: string): void{
        switch(state){
            case "start":
                // reset the dealer state
                this.dealer.reset();
                this.state = "play";
                break;
            case "play":
                const currentCard = this.dealer.announceCard();
                // if we receive undefined
                // we ran out of cards
                if(currentCard === undefined){
                    state = "gameover"; // set state to gameover
                    break; // break out of case play
                }
                // start the round 
                setTimeout( () => {
                    console.log(currentCard);
                    // iterate through AIPlayers and play a round
                    for(const player of this.players){
                        if(player instanceof AIPlayer){
                            player.playRound(currentCard, this.config.Pace);
                        }
                    }
                }, this.config.Pace * 1000);
                // poll for the Loteria calls of players
                for(const player of this.players){
                    if(player.CalledLoteria){
                        // call function to validate loteria
                        this.validateLoteria(player);
                    }
                }
                break;
            case "gameover":
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
                this.state = "gameover"; // go to state gameover
                break; // break out of patterns loop
            }
        }
        // if we make it out of the loop without going to state gameover
        if(this.state !== "gameover"){
             // incur penalty for player
            
             // implement later
             // I think the penalty will be invalidating a BoardTile
             // in the player's board.
             // for this the BoardTile class will need another field
             // active: boolean
             // this field would determine whether or not the tile 
             // is a valid tile to check for winning patterns
             // they all start as true. The penalty picks a random tile 
             // to invalidate, setting valid to false. 
        }
    }

    endGame(winner: Player){

    }

    // helper function to return random number from 1 to 100
    private randomPercent(): number{
        return Math.floor((Math.random() * 100) + 1);
    }
}