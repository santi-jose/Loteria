import BoardRow from "./BoardRow";
import { BoardTile } from "../../../../game/BoardTile";

type BoardProps = {
    CardComponent: React.ComponentType<any>;
    boardTileGrid: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
    onToggleCard: (i: number, j: number) => void;
}

export default function Board({CardComponent, boardTileGrid, cardToggleGrid, activeCardToggleGrid, onToggleCard}: BoardProps){
    return(
        <div className="board">
            {boardTileGrid.map((row, i)=> (
                <BoardRow 
                    CardComponent={CardComponent}
                    key={i}
                    id={i}
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