import { cardImages } from "../../../../assets/cards";
import type { BaseCardProps } from "./cardTypes";


export default function CardState({id, tile, toggle, active}: BaseCardProps){
    const card = tile.Card;
    let image;
    if(active){
        image = toggle ? cardImages[0] : cardImages[card.ID];
    }else{
        image = cardImages[55];
    }

    return(
        <div id={`${id}`} className="cardState">
            <h1>{`[${card.ID}] ${card.Name}`}</h1>
            <img src={image} />
        </div>
    );
}