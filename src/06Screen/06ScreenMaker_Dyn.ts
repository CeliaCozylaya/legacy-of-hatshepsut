import { SScreenIF } from "01Term/05SScreenIF";
import { MakerIF } from "./06ScreenMakerIF";
import { ScreenStack } from "01Term/05SScreenStack";
// import { OverScreen0 } from "06OverScreen";

export interface GameIF { }

export interface BuildIF1 { makeGame(): GameIF }

export class ScreenMaker1_Dyn implements MakerIF {
    game: GameIF | null = null;

    constructor(
        public build: BuildIF1,
        public gameScreen: (game: GameIF, sm: MakerIF) => SScreenIF,
        public overScreen: (game: GameIF, sm: MakerIF) => SScreenIF,
        public init: (sm: MakerIF) => SScreenIF
    ) { }

    new_Game(): SScreenIF {
        this.game = this.build.makeGame();
        return this.gameScreen(<GameIF>this.game, this);
    }
    gameOver(): SScreenIF {
        return this.overScreen(<GameIF>this.game, this);
    }

    static runDyn(dyn_gs: ScreenMaker1_Dyn) {
        ScreenStack.run_SScreen(dyn_gs.init(dyn_gs));
    }

    // static runBuilt_GOfirst(build: BuildIF1) {
    //     let dyn_gs: ScreenMaker1_Dyn = new ScreenMaker1_Dyn(
    //         build,
    //         (g: GameIF, sm: MakerIF) => new GameScreen(g, sm),
    //         (g: GameIF, sm: MakerIF) => new OverScreen0(sm),
    //         (sm: MakerIF) => sm.gameOver()
    //     );
    //     this.runDyn(dyn_gs);
    // }
}
