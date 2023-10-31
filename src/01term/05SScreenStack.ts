import { type TermIF } from './03TermIF'
import { EventMgr } from './04EventMgr'
import { type RawScreenIF } from './04RawScreenIF'
import { type SScreenIF } from './05SScreenIF'
import { type ScreenStackIF } from './05SScreenStackIF'

export class ScreenStack implements ScreenStackIF, RawScreenIF {
    name = 'stack'
    s: SScreenIF[] = []
    pop() { this.s.pop(); }
    push(screen: SScreenIF) { this.s.push(screen); }
    cur(): SScreenIF { return this.s[this.s.length - 1]; }
    draw(term: TermIF) {
        let s = this.cur();
        if (s) { s.draw(term); }
    }
    onKey(e: JQuery.KeyDownEvent) {
        let s = this.cur();
        if (s) { s.onKey(e, this); }
    }

    static run_SScreen(sScreen: SScreenIF) {
        let stack = new ScreenStack();
        stack.push(sScreen);
        EventMgr.runRawScreen(stack);
    }
}
