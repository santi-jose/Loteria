import Board from "./board/Board";
import { BoardTile } from "../../../game/BoardTile";

type PlayerOverlayProps = {
    rowArray: BoardTile[][];
}

export default function PlayerOverlay({ rowArray }: PlayerOverlayProps){

    return(
        <>
            <Board rowArray={rowArray}/>
        </>
    );
}