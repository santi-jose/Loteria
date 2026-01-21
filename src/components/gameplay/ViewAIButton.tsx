type ViewAIButtonProps = {
    id: number,
    onViewAIClick: (i: number) => void
}

export default function ViewAIButton({id, onViewAIClick}: ViewAIButtonProps){
    return (
        <button 
            className="AIButton" 
            id={id.toString()}
            onClick={()=>{onViewAIClick(id)}}
        >
        AI_{id}
        </button>
    );
}