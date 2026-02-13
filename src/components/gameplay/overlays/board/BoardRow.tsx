import { BoardTile } from "../../../../game/BoardTile";

type BoardRowProps = {
    CardComponent: React.ComponentType<any>;
    id: number;
    boardTileRow: BoardTile[];
    toggleArray: boolean[];
    activeToggleArray: boolean[];
    row: number;
    onToggleCard: (i: number, j: number) => void;
}

export default function BoardRow({CardComponent, id, boardTileRow, toggleArray, activeToggleArray, row, onToggleCard}: BoardRowProps){
    return(
        <div id={`${id}`} className="boardRow">
            {boardTileRow.map((tile, j) => (
                <CardComponent 
                    key={j}
                    id={j}
                    tile={tile} 
                    toggle={toggleArray[j]}
                    active={activeToggleArray[j]}
                    row={row}
                    col={j}
                    onToggleCard={onToggleCard}
                />
            ))}
        </div>
    );
}