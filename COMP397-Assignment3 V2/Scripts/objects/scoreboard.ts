module objects {
    export class ScoreBoard {

        public score: number;
        public lives: number;
        public active: boolean;
        private _scoreTxt: createjs.Text;
        private _livesTxt: createjs.Text;

        constructor(game: createjs.Container) {
            this.score = 0;
            this.lives = 5;
            this.active = true;
            this._livesTxt = new createjs.Text("Lives: ", "40px Consolas", "#ffff00");
            game.addChild(this._livesTxt);
            this._scoreTxt = new createjs.Text("Score: ", "40px Consolas", "#ffff00");
            this._scoreTxt.x = 400;
            game.addChild(this._scoreTxt);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this._livesTxt.text = "Lives: " + this.lives;
            this._scoreTxt.text = "Score: " + this.score;
        }
    }
} 