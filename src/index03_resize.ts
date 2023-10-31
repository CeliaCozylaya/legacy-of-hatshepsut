import { ResizingTerm } from "01Term/03ResizingTerm";
import { TestTerm } from "01Term/03TestTerm";

let term = ResizingTerm.StockTerm();
function onResize() {
    term.onResize();
    TestTerm.test2(term, '-');
}
$(window).on('resize', onResize);
onResize();