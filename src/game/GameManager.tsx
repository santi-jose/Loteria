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
    // timer member variables
    private playTimer: NodeJS.Timeout | null = null;
    private playStartTime =  0;
    private remainingPlayTime = 0;

    constructor(config: GameConfig){
        this.state = "standby";
        this.dealer = new Dealer();
        this.config = config;
        this.dealer.Deck.shuffle(); // shuffle deck
        
        // create and push user player into Player array
        this.players.push(new Player("Player 1"));

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

        // Initialize callback function for player loteria call
        for(const player of this.players){
            player.onLoteria = () => {
                console.log(`${player.Name} called LOTERIA`);
                this.validateLoteria(player);
            };
        }
    }

    enterStandby(): void{
        this.state = "standby";
        console.log("State = standby");
        const currentCard = this.dealer.announceCard();

        // check for undefined currentcard
        if(currentCard === undefined){
            this.enterGameOver();
            return;
        }
        this.currentCard = currentCard;
        console.log(`Current Card in round: ${this.currentCard?.Name}`);
        
        this.enterPlay();
    }

    enterPlay(): void{
        this.state = "play";
        console.log("State = play");

        this.playStartTime = Date.now();

        // start timer for transition to standby
        this.playTimer = setTimeout(() => {
            this.enterStandby();
        }, this.config.Pace * 1000);

        // trigger AIPlayers to play round
        for(const player of this.players){
            if(player instanceof AIPlayer){
                player.playRound(this.currentCard, this.config.Pace);
            }
        }
    }

    enterGameOver(): void{
        this.state = "gameover";
        console.log("State = gameover");
        if(this.winner === undefined){
            console.log(`Game Over. Deck ran out before a winner could be decided. Tie game!`);
        }else{
            console.log(`Game Over. Player ${this.winner.Name} wins!`);
        }
    }

    validateLoteria(player: Player): void{
        // ignore late calls
        if(this.state!=="play") return;
        console.log(`Validating Loteria for ${player.Name}...`);

        // Pause play timer
        if(this.playTimer){
            clearTimeout(this.playTimer);
            this.playTimer = null;
        }

        // calculate how much time was left in the round
        const elapsed = (Date.now() - this.playStartTime) / 1000;
        this.remainingPlayTime = this.config.Pace - elapsed;

        let validLoteria = true;
        // iterate through array of patterns within player Board
        for(const pattern of player.Board.checkPatterns()){
            for(const card of pattern.cards){
                // if the card is not included in the cards seen deck 
                if(!this.dealer.CardsDrawn.Cards.includes(card)){
                    // current pattern is not valid
                    validLoteria = false;
                    break; // break to check next pattern
                }
            }
            // if the full pattern exists in the CardsDrawn deck
            if(validLoteria === true){
                this.winner = player; // save winner to 
                this.enterGameOver();
            }
        }
        // if we make it out of the loop without confirming validLoteria
        if(!validLoteria){
             // incur penalty for player
            console.log(`Invalid Loteria call by ${player.Name}, Penalty applied.`);
            // apply penalty to random tile in palyer's board
             const i = this.randomIndex();
             const j = this.randomIndex();
             player.Board.getTile(i, j).deactivate();
             this.resumePlayRound();
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

    // helper to resume playRound after invalid Loteria call
    private resumePlayRound(): void{
        if(this.remainingPlayTime <= 0){
            // Round ended during pause -> go to standby
            this.enterStandby();
            return;
        }

        this.playStartTime = Date.now();

        this.playTimer = setTimeout(() => {
            this.enterStandby();
        }, this.remainingPlayTime * 1000);
        console.log(`Play resumed for ${this.remainingPlayTime.toFixed(2)} seconds`);
    }
}