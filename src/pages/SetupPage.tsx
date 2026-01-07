import StartButton from "../components/buttons/StartButton";
import GameConfigurationPanel from "../components/setup/GameConfigurationPanel";

import { useState } from 'react';

export default function SetupPage(){
    const [winCons, setWinCon] = useState([false, false, false, false, false]);
    const [pace, setPace] = useState(1);

    return(
        <>
            <h1>SetupPage</h1>
            <form name="configSettings">
                <GameConfigurationPanel winCons={winCons} />
                <StartButton />
            </form>
        </>
    );
}