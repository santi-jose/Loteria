import React, { createContext } from 'react';
import { GameConfig } from '../game/GameConfig';
import { GameManager } from '../game/GameManager';

export type GameContextType = {
    // game setup and gameplay loop states & setters
    gameConfig: GameConfig | null;
    setGameConfig: React.Dispatch<React.SetStateAction<GameConfig | null>>;
    gameManager: GameManager | null;
    setGameManager: React.Dispatch<React.SetStateAction<GameManager | null>>;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
