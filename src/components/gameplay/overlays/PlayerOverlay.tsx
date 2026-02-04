import Board from "./board/Board";
import { BoardTile } from "../../../game/BoardTile";

type PlayerOverlayProps = {
    rowArray: BoardTile[][];
    cardToggleGrid: boolean[][];
    onToggleCard: (i: number, j: number) => void;
}

export default function PlayerOverlay({ rowArray, cardToggleGrid, onToggleCard}: PlayerOverlayProps){

    return(
        <>
            <Board rowArray={rowArray} cardToggleGrid={cardToggleGrid} onToggleCard={onToggleCard}/>
        </>
    );
}