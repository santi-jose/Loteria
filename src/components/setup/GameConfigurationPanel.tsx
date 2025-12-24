import WinConChecklist from "./WinConChecklist";
import PaceDropdown from "./PaceDropdown";

export default function GameConfigurationPanel(){
    return(
        <>
            <h2>GameConfigurationPanel</h2>
            <WinConChecklist />
            <PaceDropdown />
        </>
    );
}