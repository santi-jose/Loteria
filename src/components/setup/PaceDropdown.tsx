export default function PaceDropdown(){
    // array of durations of rounds in seconds
    let durations: number[] = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];
    return(
        <>
            <h3>Pace</h3>
            <select name="paceDropdown" id="paceDropdown">
                {
                    durations.map((duration)=> 
                        <option id={duration.toString()} key={duration} value={duration}>{duration+" second(s)"}</option>
                    )
                }
            </select>
        </>
    );
}