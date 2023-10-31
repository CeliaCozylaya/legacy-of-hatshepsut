import { SScreenIF } from "01term/05SScreenIF";

export interface MakerIF {
    new_Game(): SScreenIF;
    gameOver(): SScreenIF;
}