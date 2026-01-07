import WinConChecklist from "./WinConChecklist";
import PaceDropdown from "./PaceDropdown";

type GameConfigurationProps = {
    winCons: boolean[]
}

export default function GameConfigurationPanel({winCons}: GameConfigurationProps){
    return(
        <>
            <WinConChecklist winCons={winCons} />
            <PaceDropdown />
        </>
    );
}