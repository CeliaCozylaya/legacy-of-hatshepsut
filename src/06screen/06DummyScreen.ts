import { SScreenIF } from "01term/05SScreenIF";
import { MakerIF } from "./06ScreenMakerIF";
import { TermIF } from "01term/03TermIF";
import { ScreenStackIF } from "01term/05SScreenStackIF";

export class DummyScreen implements SScreenIF {
    name = 'dummy';
    constructor(public make: MakerIF) { }
    draw(term: TermIF) {
        term.txt(1, 1, 'Press Key', "cyan", "blue");
    }
    onKey(e: JQuery.KeyDownEvent, s: ScreenStackIF) {
        s.pop();
        s.push(this.make.gameOver());
    }
}