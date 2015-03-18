//Author: Louis Smith
//File: scoreboard.ts
//Last Modified Date: 18/03/2015
//Description: This is the scoreboard file that keeps track of the
//  player lives and score and displays it

module objects {
    export class ScoreBoard {

        public score: number;
        public lives: number;
        public active: boolean;
        private _scoreTxt: createjs.Text;
        private _livesTxt: createjs.Text;

        constructor(game: createjs.Container) {
            this.score = 0;
            this.lives = constants.CAR_LIVES;
            this.active = true;
            this._livesTxt = new createjs.Text("Lives: ", "24px Impact", "#ffff00");
            game.addChild(this._livesTxt);
            this._scoreTxt = new createjs.Text("Score: ", "24px Impact", "#ffff00");
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