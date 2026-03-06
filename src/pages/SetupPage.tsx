import StartButton from "../components/buttons/StartButton";
import GameConfigurationPanel from "../components/setup/GameConfigurationPanel";

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useGame } from "../context/useGame";
import { GameConfig } from "../game/GameConfig";

export default function SetupPage(){
    const navigate = useNavigate();
    const { setGameConfig } = useGame();

    const [winCons, setWinCons] = useState([false, false, false, false, false]);
    const [pace, setPace] = useState(1);

    const toggleWinCon = (index: number) => {
        setWinCons(prev => 
            prev.map((value, i) => 
                i === index ? !value : value
            )
        );
    };

    const selectPace = (newPace: number) => {
        setPace(newPace);
    }

    const handleStartGame = () => {
        const config = new GameConfig(pace, winCons, 4);
        console.log(config);
        setGameConfig(config);

        navigate("/gameplay");
    }

    useEffect(() => {
        console.log("winCons updated: ", winCons)
    }, [winCons]);

    useEffect(() => {
        console.log("pace: ", pace);
    }, [pace]);

    useEffect(() => {
        console.log("gameConfig: ", GameConfig)
    })

    return(
        <>
            <h1>SetupPage</h1>
            <GameConfigurationPanel 
                winCons={winCons} 
                pace={pace}
                onToggleWinCon={toggleWinCon}
                onSelectPace={selectPace}
            />
            <StartButton onStart={handleStartGame}/>
        </>
    );
}