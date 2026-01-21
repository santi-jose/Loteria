type ViewPlayerButtonProps = {
    onViewPlayerClick: () => void
}

export default function ViewPlayerButton({onViewPlayerClick}: ViewPlayerButtonProps){
    return(
        <>
            <button onClick={onViewPlayerClick}>
                Player 1
            </button>
        </>
    );
}