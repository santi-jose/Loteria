type StartButtonProps = {
    onStart: () => void;
}

export default function StartButton({onStart}: StartButtonProps){
    return(
        <div>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
}