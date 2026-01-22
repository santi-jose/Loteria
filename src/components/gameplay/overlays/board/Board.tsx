import BoardRow from "./BoardRow";
import { BoardTile } from "../../../../game/BoardTile";

type BoardProps = {
    rowArray: BoardTile[][];
}

export default function Board({rowArray}: BoardProps){
    return(
        <div className="board">
            <BoardRow tileArray={rowArray[0]}/>
            <BoardRow tileArray={rowArray[1]}/>
            <BoardRow tileArray={rowArray[2]}/>
            <BoardRow tileArray={rowArray[3]}/>
        </div>
    );
}