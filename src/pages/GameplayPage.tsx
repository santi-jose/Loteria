import { useState } from "react";
import { useLocation } from "react-router-dom";
import DealerPanel from "../components/gameplay/DealerPanel";
import AIViewButtons from "../components/gameplay/AIViewButtons";
import cardData from "../data/cards.json";
import { cardImages } from "../assets/cards";
import ActiveCardPanel from "../components/gameplay/ActiveCardPanel";
import ViewPlayerButton from "../components/gameplay/ViewPlayerButton";
import PlayerOverlay from "../components/gameplay/overlays/PlayerOverlay";
import { Board } from "../game/Board";

export default function GameplayPage(){
    const location = useLocation();
    const configuration = location.state;
    console.log(configuration);

    // const winCons = ["Row", "Column", "Diagonal", "Complete", "Pozo"];

    // DealerPanel Props
    const [roundTimer, setRoundTimer] = useState(configuration.pace);
    const [deckCount, setDeckCount] = useState(54);
    const [discardPileCount, setDiscardPile] = useState(0);

    // AIViewButtons Props
    const [overlayAIActive, setOverlayAIView] = useState([false, false, false, false]);
    const handleViewAIClick = (id: number) => {
        console.log(`ViewAIButton${id} clicked`);
        const newOverlayAIView = overlayAIActive.map((_, i) => {
            if((i+1) === id){
                return true;
            }else{
                return false;
            }
        });
        setOverlayAIView(newOverlayAIView);
    }
    console.log(`overlayAIActive: ${overlayAIActive}`);

    // dummy card to represent active card
    const randomIndex = Math.floor(Math.random()*54);

    // ActiveCardPanel Props
    const [activeCard, setActiveCard] = useState(cardData[randomIndex]);

    // set AIPlayer count to 4
    const AIPlayerCount = 4;

    // ViewPlayerButton props
    const [overlayPlayerActive, setOverlayPlayerView] = useState(false);
    const handleViewPlayerClick = () => {
        console.log("ViewPlayerButton clicked");
        setOverlayPlayerView(!overlayPlayerActive);
    }
    console.log(`overlayPlayerActive: ${overlayPlayerActive}`);

    // PlayerOverlay Props

    // Board props
    // const dummyBoard = new Board();
    // const boardData = dummyBoard.
    const [board, setBoard] = useState(new Board());

    const Row1 = [];
    const Row2 = [];
    const Row3 = [];
    const Row4 = [];

    // create rows of tiles
    for(let j = 0; j < 4; j++){
        Row1.push(board.getTile(0, j));
        Row2.push(board.getTile(1, j));
        Row3.push(board.getTile(2, j));
        Row4.push(board.getTile(3, j));
        // console.log(board.getTile(0,j).Card.Name)
        // console.log(board.getTile(1,j).Card.Name)
        // console.log(board.getTile(2,j).Card.Name)
        // console.log(board.getTile(3,j).Card.Name)
    }

    // create an array to store the row of tiles
    const rowArray = [Row1, Row2, Row3, Row4];

    // CardToggle props
    const [cardToggle, toggleCard] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]);

    return (
        <>
            <h1>GameplayPage</h1>
            {/* <h2>Configuration</h2>
            WinCons: 
            <ul>
            {configuration.winCons.map((winCon: boolean, i: number) => {
                return(
                    winCon ? <li>{winCons[i]}</li>: ""
                );
            })}
            </ul>
            Pace: {configuration.pace} */}
            <DealerPanel 
                roundTimer={roundTimer}
                deckCount={deckCount}
                discardPileCount={discardPileCount}
            />
            <div className="mainGamePanel">
                <AIViewButtons 
                    onViewAIClick={handleViewAIClick}
                    AIPlayerCount={AIPlayerCount}
                />
                <ActiveCardPanel 
                    id={activeCard.id}
                    name={activeCard.name}
                    description={activeCard.description}
                    image={cardImages[activeCard.id]}
                />
            </div>
            <ViewPlayerButton 
                onViewPlayerClick={handleViewPlayerClick}
            />
            {overlayPlayerActive && 
            <PlayerOverlay 
                rowArray={rowArray}
            />}
        </>
    );
}