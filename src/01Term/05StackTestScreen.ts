import { TermIF } from './03TermIF'
import { TestTerm } from './03TestTerm'
import { type SScreenIF } from './05SScreenIF'
import { ScreenStackIF } from './05SScreenStackIF'

export class StackTestScreen implements SScreenIF {
    name = 'test2'
    key: string = '-';
    onKey(e: JQuery.KeyDownEvent, s: ScreenStackIF): void { this.key = `?:${e.key}`; }
    draw(term: TermIF): void { TestTerm.test2(term, this.key); }
}
