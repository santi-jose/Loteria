type CallLoteriaButtonProps = {
    onCallLoteria: () => void;
}

export default function CallLoteriaButton({onCallLoteria}: CallLoteriaButtonProps){
    return(
        <button onClick={onCallLoteria}>
            Call Loteria
        </button>
    );
}