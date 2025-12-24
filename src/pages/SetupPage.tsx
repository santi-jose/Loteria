import StartButton from "../components/buttons/StartButton";
import GameConfigurationPanel from "../components/setup/GameConfigurationPanel";

export default function SetupPage(){
    return(
        <>
            <h1>SetupPage</h1>
            <GameConfigurationPanel />
            <StartButton />
        </>
    );
}