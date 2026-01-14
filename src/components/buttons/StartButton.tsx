type StartButtonProps = {
    onStart: () => void;
}

export default function StartButton({onStart}: StartButtonProps){
    return(
        <button onClick={onStart}>Start Game</button>
    );
}