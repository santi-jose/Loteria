import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CardState from "../components/gameplay/overlays/card/CardState";
import PlayButton from "../components/buttons/PlayButton";

export default function GameOverPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const winnerData = location.state;
    console.log(winnerData);

    const handlePlay = () => {
        navigate("/setup");
    }

    return <>
        GameOverPage
        {/* <Board 
            CardComponent={CardState}
            boardTileGrid={winnerData.playerBoardTileGrid}
            cardToggleGrid={winnerData.cardToggleGrid}
            activeCardToggleGrid={winnerData.activeCardToggleGrid}
            onToggleCard={() => console.log(`Winner Board has no toggle`)}
        /> */}
        <PlayButton onPlay={handlePlay}/>
    </>
}