import BoardRow from "./BoardRow";
import { BoardTile } from "../../../../game/BoardTile";

type BoardProps = {
    rowArray: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
    onToggleCard: (i: number, j: number) => void;
}

export default function Board({rowArray, cardToggleGrid, activeCardToggleGrid, onToggleCard}: BoardProps){
    return(
        <div className="board">
            {rowArray.map((row, i)=> (
                <BoardRow 
                    tileArray={row} 
                    toggleArray={cardToggleGrid[i]} 
                    activeToggleArray={activeCardToggleGrid[i]}
                    row={i}
                    onToggleCard={onToggleCard}
                />
            ))}
        </div>
    );
}