import { GameConfig } from "./game/GameConfig";
import { GameManager } from "./game/GameManager";

const winCon = [true, true, true];
const config = new GameConfig(2, winCon, 2);
const gm = new GameManager(config);

gm.enterStandby();

console.log("Simulation started.");