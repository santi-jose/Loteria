import Board from "./board/Board";
import { BoardTile } from "../../../game/BoardTile";
import CardState from "./card/CardState";

type AIOverlayProps = {
    id: number;
    boardTileGrid: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
}

export default function AIOverlay({id, boardTileGrid, cardToggleGrid, activeCardToggleGrid}: AIOverlayProps){
    return(
        <div id={`${id}`}>
            <h1>{`AI${id}Overlay`}</h1>
            <Board 
                CardComponent={CardState}
                boardTileGrid={boardTileGrid}
                cardToggleGrid={cardToggleGrid}
                activeCardToggleGrid={activeCardToggleGrid}
                onToggleCard={()=>(console.log('AIPlayer has no toggle'))}
            />
        </div>
    );
}