import { SScreenIF } from "01Term/05SScreenIF";

export interface MakerIF {
    new_Game(): SScreenIF;
    gameOver(): SScreenIF;
}