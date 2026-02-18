import Board from "./board/Board";
import CallLoteriaButton from "./CallLoteriaButton";
import { BoardTile } from "../../../game/BoardTile";
import CardToggle from "./card/CardToggle";

type PlayerOverlayProps = {
    boardTileGrid: BoardTile[][];
    cardToggleGrid: boolean[][];
    activeCardToggleGrid: boolean[][];
    onToggleCard: (i: number, j: number) => void;
    onCallLoteria: () => void;
}

export default function PlayerOverlay({ boardTileGrid, cardToggleGrid, activeCardToggleGrid, onToggleCard, onCallLoteria}: PlayerOverlayProps){

    return(
        <>
            <Board
                CardComponent={CardToggle}
                boardTileGrid={boardTileGrid} 
                cardToggleGrid={cardToggleGrid} 
                activeCardToggleGrid={activeCardToggleGrid}
                onToggleCard={onToggleCard}
            />
            <CallLoteriaButton onCallLoteria={onCallLoteria}/>
        </>
    );
}