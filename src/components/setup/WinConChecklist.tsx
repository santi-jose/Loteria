type WinConProps = {
    winCons: boolean[]
}

export default function WinConChecklist({ winCons }: WinConProps){
    return(
        <>
            <h3>Win Condition(s)</h3>
            <WinCons />
        </>
    );

    function WinCons(){
        let winConTypes: string[] = [
            "Row",
            "Column",
            "Diagonal",
            "Complete",
            "Pozo"
        ];
        function handleClick(){
            
        }
        return(
            <>
                {winConTypes.map((winConType, index) => 
                    <div key={winConType}>
                        <input type="checkbox" id={winConType} name="winCon" value={winConType} checked={winCons[index]} onClick={handleClick}/>
                        <label htmlFor={winConType}>{winConType}</label>
                    </div>
                )}
            </>
        );
    }
}