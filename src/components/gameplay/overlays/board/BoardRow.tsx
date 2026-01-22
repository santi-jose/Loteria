import { BoardTile } from "../../../../game/BoardTile";
import CardToggle from "../card/CardToggle";

type BoardRowProps = {
    tileArray: BoardTile[];
}

export default function BoardRow({tileArray}: BoardRowProps){
    return(
        <div className="boardRow">
            {tileArray.map((tile) => {
                return(<CardToggle tile={tile}/>);
            })}
        </div>
    );
}