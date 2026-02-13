import Board from "./board/Board";
import { BoardTile } from "../../../game/BoardTile";

type PlayerOverlayProps = {
    boardTileGrid: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
    onToggleCard: (i: number, j: number) => void;
}

export default function PlayerOverlay({ boardTileGrid, cardToggleGrid, activeCardToggleGrid, onToggleCard}: PlayerOverlayProps){

    return(
        <>
            <Board 
                boardTileGrid={boardTileGrid} 
                cardToggleGrid={cardToggleGrid} 
                activeCardToggleGrid={activeCardToggleGrid}
                onToggleCard={onToggleCard}
            />
        </>
    );
}