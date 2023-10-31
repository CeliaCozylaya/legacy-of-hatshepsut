import { TermIF } from "./03TermIF";
import { ScreenStackIF } from "./05SScreenStackIF";

export interface SScreenIF {
    draw(term: TermIF): void;
    onKey(e: JQuery.KeyDownEvent, stack: ScreenStackIF): void;
    name: string;
}