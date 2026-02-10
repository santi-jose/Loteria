import { BoardTile } from "../../../../game/BoardTile";
import CardToggle from "../card/CardToggle";

type BoardRowProps = {
    tileArray: BoardTile[];
    toggleArray: boolean[];
    activeToggleArray: boolean[];
    row: number;
    onToggleCard: (i: number, j: number) => void;
}

export default function BoardRow({tileArray, toggleArray, activeToggleArray, row, onToggleCard}: BoardRowProps){
    return(
        <div className="boardRow">
            {tileArray.map((tile, j) => (
                <CardToggle 
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