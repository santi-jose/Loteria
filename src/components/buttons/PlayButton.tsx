type PlayButtonProps = {
    onPlay: () => void
}

export default function PlayButton({ onPlay }: PlayButtonProps){
    return(
        <>
            <button onClick={onPlay}>PlayButton</button>
        </>
    );
}