import { DMapIF } from "02Model/07DMapIF";
import { Rnd } from "02Model/07Rnd";

export interface GameIF {
    rnd: Rnd;
    curMap(): DMapIF | null;
}