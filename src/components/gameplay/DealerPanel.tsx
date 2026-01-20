type DealerPanelProps = {
    roundTimer: number,
    deckCount: number,
    discardPileCount: number
}

export default function DealerPanel({roundTimer, deckCount, discardPileCount}: DealerPanelProps){


    return(
        <div className="dealerPanel">
            <div className="dealerComponent">
            roundTimer: {roundTimer}
            </div>
            <div className="dealerComponent">
            deckCount: {deckCount}
            </div>
            <div className="dealerComponent">
            discardPileCount: {discardPileCount}
            </div>
        </div>
    );
}