export default function WinConChecklist(){
    return(
        <>
            <h3>Win Condition(s)</h3>
            <WinCons />
        </>
    );

    function WinCons(){
        let winCons: string[] = [
            "Row",
            "Column",
            "Diagonal",
            "Complete",
            "Pozo"
        ];
        return(
            <>
                {winCons.map((winCon) => 
                    <div key={winCon}>
                        <input type="checkbox" id={winCon} name="winCon" value={winCon} />
                        <label htmlFor={winCon}>{winCon}</label>
                    </div>
                )}
            </>
        );
    }
}