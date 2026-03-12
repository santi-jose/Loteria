import { useState } from 'react';
import { GameContext } from './GameContext';
import { GameConfig } from '../game/GameConfig';
import { GameManager } from '../game/GameManager';
import { Card } from '../game/Card';
import { Board } from '../game/Board';

export function GameProvider({ children }: {children: React.ReactNode}){
    const[gameConfig, setGameConfig] = useState<GameConfig | null>(null);
    const[gameManager, setGameManager] = useState<GameManager | null>(null);

    return(
        <GameContext.Provider 
            value={{
                gameConfig, 
                setGameConfig,
                gameManager,
                setGameManager
            }}>
                {children}
        </GameContext.Provider>
    )
}