import WinConChecklist from "./WinConChecklist";
import PaceDropdown from "./PaceDropdown";

type GameConfigurationPanelProps = {
    winCons: boolean[];
    pace: number;
    onToggleWinCon: (index: number) => void;
    onSelectPace: (pace: number) => void;
}

export default function GameConfigurationPanel({winCons, pace, onToggleWinCon, onSelectPace}: GameConfigurationPanelProps){
    return(
        <>
            <WinConChecklist winCons={winCons} onToggleWinCon={onToggleWinCon} />
            <PaceDropdown pace={pace} onSelectPace={onSelectPace}/>
        </>
    );
}