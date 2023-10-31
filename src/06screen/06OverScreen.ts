import { SScreenIF } from "01term/05SScreenIF";
import { MakerIF } from "./06ScreenMakerIF";
import { TermIF } from "01term/03TermIF";
import { ScreenStackIF } from "01term/05SScreenStackIF";

export class OverScreen0 implements SScreenIF {
    name = 'gameover';
    constructor(public make: MakerIF) { }
    draw(term: TermIF) {
        term.txt(1, 1, 'Game Over', "yellow", "red");
    }
    onKey(e: JQuery.KeyDownEvent, s: ScreenStackIF) {
        s.pop();
        s.push(this.make.new_Game());
    }
}