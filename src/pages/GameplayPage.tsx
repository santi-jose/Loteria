import { useState } from "react";
import { useLocation } from "react-router-dom";
import DealerPanel from "../components/gameplay/DealerPanel";
import AIViewButtons from "../components/gameplay/AIViewButtons";
import cardData from "../data/cards.json";
import { cardImages } from "../assets/cards";
import ActiveCardPanel from "../components/gameplay/ActiveCardPanel";
import ViewPlayerButton from "../components/gameplay/ViewPlayerButton";

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
    const handleViewAIClick = (i: number) => {
        console.log(`ViewAIButton${i} clicked`);
    }

    // dummy card to represent active card
    const randomIndex = Math.floor(Math.random()*54)

    // ActiveCardPanel Props
    const [activeCard, setActiveCard] = useState(cardData[randomIndex]);

    // set AIPlayer count to 4
    const AIPlayerCount = 4;

    // ViewPlayerButton props
    const handleViewPlayerClick = () => {
        console.log("ViewPlayerButton clicked");
    }

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
        </>
    );
}