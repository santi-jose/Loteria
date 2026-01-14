import WinConChecklist from "./WinConChecklist";
import PaceDropdown from "./PaceDropdown";

type GameConfigurationPanelProps = {
    winCons: boolean[];
    onToggleWinCon: (index: number) => void;
    pace: number;
    onSelectPace: (pace: number) => void;
}

export default function GameConfigurationPanel({winCons, onToggleWinCon, pace, onSelectPace}: GameConfigurationPanelProps){
    return(
        <>
            <WinConChecklist winCons={winCons} onToggleWinCon={onToggleWinCon} />
            <PaceDropdown pace={pace} onSelectPace={onSelectPace}/>
        </>
    );
}