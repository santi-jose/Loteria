import { cardImages } from "../../../../assets/cards";
import type { BaseCardProps, InteractiveCardProps } from "./cardTypes";

export default function CardToggle({id, tile, toggle, row, col, onToggleCard, active}: BaseCardProps & InteractiveCardProps){
    const card = tile.Card;
    let image;
    if(active){
        image = toggle ? cardImages[0] : cardImages[card.ID];
    }else{
        image = cardImages[55];
    }
    
    return(
        <div id={`${id}`} className="cardToggle">
            <h1>{`[${card.ID}] ${card.Name}`}</h1>
            <img src={image} onClick={() => active ? onToggleCard(row,col): null}/>
        </div>
    );
}