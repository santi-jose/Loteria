import { BoardTile } from "../../../../game/BoardTile";
import { cardImages } from "../../../../assets/cards";

type CardToggleProps = {
    tile: BoardTile;
    toggle: boolean;
    row: number;
    col: number;
    onToggleCard: (i: number, j: number) => void;
}

export default function CardToggle({tile, toggle, row, col, onToggleCard}: CardToggleProps){
    const card = tile.Card;

    const image = toggle ? cardImages[0] : cardImages[card.ID];
    return(
        <div className="cardToggle">
            <h1>{"["+card.ID+"] "+card.Name}</h1>
            <img src={image} onClick={() => onToggleCard(row,col)}/>
        </div>
    );
}