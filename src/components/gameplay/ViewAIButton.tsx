type ViewAIButtonProps = {
    id: number,
    onViewAIClick: () => void
}

export default function ViewAIButton({id, onViewAIClick}: ViewAIButtonProps){
    return (
        <button 
            className="AIButton" 
            id={id.toString()}
            onClick={onViewAIClick}
        >
        AI{id}
        </button>
    );
}