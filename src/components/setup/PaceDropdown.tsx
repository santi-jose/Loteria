type paceProps = {
    pace: number;
    onSelectPace: (pace: number) => void;
}

export default function PaceDropdown({ pace, onSelectPace }: paceProps){
    // array of durations of rounds in seconds
    let durations: number[] = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];
    return(
        <>
            <h3>Pace</h3>
            <select 
                name="paceDropdown" 
                id="paceDropdown" 
                value={pace}
                onChange={(e) => {onSelectPace(Number(e.target.value))}}
            >
                {
                    durations.map((duration)=> 
                        <option 
                            id={duration.toString()} 
                            key={duration} 
                            value={duration}>{duration+" second(s)"}
                        </option>
                    )
                }
            </select>
        </>
    );
}