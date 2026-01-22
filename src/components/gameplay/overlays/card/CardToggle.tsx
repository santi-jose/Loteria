import { BoardTile } from "../../../../game/BoardTile";
import { cardImages } from "../../../../assets/cards";

type CardToggleProps = {
    tile: BoardTile;
}

export default function CardToggle({tile}: CardToggleProps){
    const card = tile.Card;
    return(
        <div className="cardToggle">
            <h1>{"["+card.ID+"] "+card.Name}</h1>
            <img src={cardImages[card.ID]}/>
        </div>
    );
}