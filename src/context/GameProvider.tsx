import { useState } from 'react';
import { GameContext } from './GameContext';
import { GameConfig } from '../game/GameConfig';
import { GameManager } from '../game/GameManager';
import { Card } from '../game/Card';
import { Board } from '../game/Board';

export function GameProvider({ children }: {children: React.ReactNode}){
    const[gameConfig, setGameConfig] = useState<GameConfig | null>(null);
    const[gameManager, setGameManager] = useState<GameManager | null>(null);
    const[deckCount, setDeckCount] = useState<number>(54);
    const[roundTimer, setRoundTimer] = useState<number>(0);
    const[discardPileCount, setDiscardPileCount] = useState<number>(0);
    const[activeCard, setActiveCard] = useState<Card | null>(null);
    const[playerBoards, setPlayerBoards] = useState<Board[] | null>(null);

    return(
        <GameContext.Provider 
            value={{
                gameConfig, 
                setGameConfig,
                gameManager,
                setGameManager,
                deckCount,
                setDeckCount,
                roundTimer,
                setRoundTimer,
                discardPileCount,
                setDiscardPileCount,
                activeCard,
                setActiveCard,
                playerBoards,
                setPlayerBoards
            }}>
                {children}
        </GameContext.Provider>
    )
}