import React, { createContext } from 'react';
import { GameConfig } from '../game/GameConfig';
import { GameManager } from '../game/GameManager';
import { Board } from '../game/Board';
import { Card } from '../game/Card';

export type GameContextType = {
    // game setup and gameplay loop states & setters
    gameConfig: GameConfig | null;
    setGameConfig: React.Dispatch<React.SetStateAction<GameConfig | null>>;
    gameManager: GameManager | null;
    setGameManager: React.Dispatch<React.SetStateAction<GameManager | null>>;

    // dealer panel states & setters
    deckCount: number;
    setDeckCount: React.Dispatch<React.SetStateAction<number>>;
    roundTimer: number;
    setRoundTimer: React.Dispatch<React.SetStateAction<number>>;
    discardPileCount: number;
    setDiscardPileCount: React.Dispatch<React.SetStateAction<number>>;

    // active card panel
    activeCard: Card | null;
    setActiveCard: React.Dispatch<React.SetStateAction<Card | null>>;

    // player boards states & setters
    playerBoards: Board[] | null;
    setPlayerBoards: React.Dispatch<React.SetStateAction<Board[] | null>>;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
