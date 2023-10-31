import { DMapIF } from "02Model/07DMapIF";
import { SScreenIF } from "./05SScreenIF";
import { ScreenStackIF } from "./05SScreenStackIF";
import { TermIF } from "./03TermIF";
import { DrawMap } from "02Model/07DrawMap";
import { WPoint } from "02Model/07WPoint";
import { ScreenStack } from "./05SScreenStack";

export class MapScreen implements SScreenIF {
    name = 'map';
    constructor(public map: DMapIF) { }
    onKey(e: JQuery.KeyDownEvent, stack: ScreenStackIF): void {
    }
    draw(term: TermIF): void {
        DrawMap.drawMap0(term, this.map, new WPoint());
    }
    static runMapScreen(map: DMapIF) {
        ScreenStack.run_SScreen(new MapScreen(map));
    }
}