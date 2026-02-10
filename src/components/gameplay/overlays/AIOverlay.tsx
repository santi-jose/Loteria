import Board from "./board/Board";
import { BoardTile } from "../../../game/BoardTile";

type AIOverlayProps = {
    id: number;
    rowArray: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
}

export default function AIOverlay({id, rowArray, cardToggleGrid, activeCardToggleGrid}: AIOverlayProps){
    return(
        <div>
            {`AI${id}Overlay`}
            <Board 
                rowArray={rowArray}
                cardToggleGrid={cardToggleGrid}
                activeCardToggleGrid={activeCardToggleGrid}
                onToggleCard={()=>(console.log('AIPlayer has no toggle'))}
            />
        </div>
    );
}