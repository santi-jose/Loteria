import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CardState from "../components/gameplay/overlays/card/CardState";
import PlayButton from "../components/buttons/PlayButton";


export default function GameOverPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const winnerData = location.state;

    const winnerPlayerBoardTileGrid = winnerData.playerBoardTileGrid;
    const winnerCardToggleGrid = winnerData.cardToggleGrid;
    const winnerActiveCardToggleGrid = winnerData.activeCardToggleGrid;

    console.log(winnerData);

    const handlePlay = () => {
        navigate("/setup");
    }

    return <>
        <h1>GameOverPage</h1>
        
        {/* <Board 
            CardComponent={CardState}
            boardTileGrid={winnerPlayerBoardTileGrid}
            cardToggleGrid={winnerCardToggleGrid}
            activeCardToggleGrid={winnerActiveCardToggleGrid}
            onToggleCard={()=>(console.log('Winner Board has no toggle'))}
        /> */}
        <PlayButton onPlay={handlePlay}/>
    </>
}