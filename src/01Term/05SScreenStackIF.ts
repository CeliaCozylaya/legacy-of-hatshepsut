import { type SScreenIF } from './05SScreenIF'

export interface ScreenStackIF {
    pop(): void;
    push(screen: SScreenIF): void;
    cur(): SScreenIF;
}
