import { Game0 } from "02Model/08GameModel";
import { GameIF } from "./08GameIF";
import { Rnd } from "02Model/07Rnd";
import { TestMap } from "02Model/07TestMap";
import { BuildIF0 } from "./08BuildIF0";
import { DMapIF } from "02Model/07DMapIF";
import { WPoint } from "02Model/07WPoint";

export class Builder0 implements BuildIF0 {
    makeGame(): GameIF {
        let rnd = new Rnd(42);
        let game = new Game0(rnd);
        game.map = this.makeLevel(rnd, 0);
        return game;
    }
    makeLevel(rnd: Rnd, level: number): DMapIF {
        return this.makeMap(rnd, level);
    }
    makeMap(rnd: Rnd, level: number): DMapIF {
        let wdim = WPoint.StockDims;
        return TestMap.test(wdim, rnd, level);
    }
}