import { useState } from "react";
import { useLocation } from "react-router-dom";
import DealerPanel from "../components/gameplay/DealerPanel";
import AIViewButtons from "../components/gameplay/AIViewButtons";

export default function GameplayPage(){
    const location = useLocation();
    const configuration = location.state;
    console.log(configuration);

    // const winCons = ["Row", "Column", "Diagonal", "Complete", "Pozo"];

    // DealerPanel Props
    const [roundTimer, setRoundTimer] = useState(configuration.pace);
    const [deckCount, setDeckCount] = useState(54);
    const [discardPileCount, setDiscardPile] = useState(0);

    // AIViewButtonsProps
    const handleViewAIClick = () => {}

    const AIPlayerCount = 4;

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
            <AIViewButtons 
                onViewAIClick={handleViewAIClick}
                AIPlayerCount={AIPlayerCount}
            />
        </>
    );
}