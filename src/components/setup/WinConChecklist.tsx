type WinConProps = {
    winCons: boolean[];
    onToggleWinCon: (index: number) => void;
}

export default function WinConChecklist({ winCons, onToggleWinCon }: WinConProps){
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

        return(
            <>
                {winConTypes.map((winConType, index) => 
                    <div key={winConType}>
                        <input 
                                type="checkbox" 
                                id={winConType} 
                                name="winCon" 
                                value={winConType} 
                                checked={winCons[index]} 
                                onChange={() => onToggleWinCon(index)}
                        />
                        <label htmlFor={winConType}>{winConType}</label>
                    </div>
                )}
            </>
        );
    }
}