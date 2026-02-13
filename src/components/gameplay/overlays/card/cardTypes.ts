import { BoardTile } from "../../../../game/BoardTile";

export type BaseCardProps = {
    id: number;
    tile: BoardTile;
    toggle: boolean;
    active: boolean;   
};

export type InteractiveCardProps = {
    row: number;
    col: number;
    onToggleCard: (i: number, j: number) => void;
};

