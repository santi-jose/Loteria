import { BoardTile } from "../../../../game/BoardTile";
import { cardImages } from "../../../../assets/cards";

type CardToggleProps = {
    tile: BoardTile;
    toggle: boolean;
    active: boolean;
    row: number;
    col: number;
    onToggleCard: (i: number, j: number) => void;
}

export default function CardToggle({tile, toggle, row, col, onToggleCard, active}: CardToggleProps){
    const card = tile.Card;
    let image;
    if(active){
        image = toggle ? cardImages[0] : cardImages[card.ID];
    }else{
        image = cardImages[55];
    }
    
    return(
        <div className="cardToggle">
            <h1>{"["+card.ID+"] "+card.Name}</h1>
            <img src={image} onClick={() => active ? onToggleCard(row,col): null}/>
        </div>
    );
}