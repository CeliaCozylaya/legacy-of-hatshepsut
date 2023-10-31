import { TermIF } from "01Term/03TermIF";
import { DMapIF } from "./07DMapIF";
import { WPoint } from "./07WPoint";
import { MapCell } from "./07MapCell";
import { Glyph } from "./07Glyph";
import { GlyphInf0, GlyphMap0 } from "./07GlyphMap";

export class DrawMap {
    static drawMap0(term: TermIF, map: DMapIF, vp: WPoint) {
        let tdim = term.dim;
        let t = new WPoint();
        let w = new WPoint();
        for (t.y = 0, w.y = vp.y; t.y < tdim.y; ++t.y, ++w.y) {
            for (t.x = 0, w.x = vp.x; t.x < tdim.x; ++t.x, ++w.x) {
                let cell: MapCell = (map.legal(w) ? map.cell(w) : this.outside);
                let i: GlyphInf0 = GlyphMap0.inf(cell.glyph());
                term.at(t.x, t.y, i.c, 'gray', 'lightgray');
            }
        }
    }
    static outside: MapCell; MapCell = new MapCell(Glyph.Unknown);
}