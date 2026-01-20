import ViewAIButton from "./ViewAIButton";

type AIViewButtonsProps = {
    onViewAIClick: (i: number) => void;
    AIPlayerCount: number
}

export default function AIViewButtons({onViewAIClick, AIPlayerCount}: AIViewButtonsProps){
    const AIViewButtons = [];

    for(let i=1; i <= AIPlayerCount; i++){
        AIViewButtons.push(<ViewAIButton id={i} key={i} onViewAIClick={onViewAIClick}/>);
    }

    return(
        <div 
            className="AIButtons"
        >
            {AIViewButtons}
        </div>
    );
}