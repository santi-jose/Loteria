import BoardRow from "./BoardRow";
import { BoardTile } from "../../../../game/BoardTile";

type BoardProps = {
    boardTileGrid: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
    onToggleCard: (i: number, j: number) => void;
}

export default function Board({boardTileGrid, cardToggleGrid, activeCardToggleGrid, onToggleCard}: BoardProps){
    return(
        <div className="board">
            {boardTileGrid.map((row, i)=> (
                <BoardRow 
                    boardTileRow={row} 
                    toggleArray={cardToggleGrid[i]} 
                    activeToggleArray={activeCardToggleGrid[i]}
                    row={i}
                    onToggleCard={onToggleCard}
                />
            ))}
        </div>
    );
}