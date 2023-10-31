import { DMapIF } from "02Model/07DMapIF";
import { Rnd } from "02Model/07Rnd";
import { GameIF } from "06Screen/06ScreenMaker_Dyn";

export interface BuildIF0 {
    makeGame(): GameIF;
    makeLevel(rnd: Rnd, level: number): DMapIF;
    makeMap(rnd: Rnd, level: number): DMapIF;
}