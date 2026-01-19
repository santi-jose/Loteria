import DisplayCard from "../components/board/DisplayCard";
import PlayButton from "../components/buttons/PlayButton";

import cardData from "../data/cards.json";
import { cardImages } from "../assets/cards";

import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const randomIndex = Math.floor(Math.random()*54);
    const randomCard = cardData[randomIndex];

    const navigate = useNavigate();
    
    const handlePlay = () => {
        navigate("/setup");
    }

    return(
        <>
            <h1>¡Loteria!</h1>
            <DisplayCard 
                id={randomCard.id}
                name={randomCard.name}
                description={randomCard.description}
                image={cardImages[randomCard.id]}
            />
            <PlayButton onPlay={handlePlay}/>
        </>
    );
}

