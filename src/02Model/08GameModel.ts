import { GameIF } from "06Screen/06ScreenMaker_Dyn";
import { Rnd } from "./07Rnd";
import { DMapIF } from "./07DMapIF";

export class Game0 implements GameIF {
    constructor(public rnd: Rnd) { }
    map: DMapIF | null = null;
    curMap(): DMapIF | null { return this.map; }
}