﻿//Author: Louis Smith
//File: gameover.ts
//Last Modified Date: 18/03/2015
//Description: This is the gameover state when the player loses

module states {
    export class GameOver {
        //Game Objects
        public game: createjs.Container;
        
        public over: createjs.Bitmap;
        public finalScoreTxt: objects.Text;
        public highScoreTxt: objects.Text;
        public tryAgainBtn: objects.Button;
        public tryAgain: boolean = false;

        //Constructor
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Over Image
            this.over = new createjs.Bitmap(assetLoader.getResult("gameover"));
            this.over.x = 120;
            this.over.y = 30;
            this.game.addChild(this.over);

            //Final Score Text
            this.finalScoreTxt = new objects.Text(320, 180, "SCORE: " + currentScore);
            this.game.addChild(this.finalScoreTxt);

            //High Score Text
            this.highScoreTxt = new objects.Text(320, 240, "HIGHSCORE: " + highScore);
            this.game.addChild(this.highScoreTxt);

            //Try Again Object
            this.tryAgainBtn = new objects.Button(320, 320, "tryAgainBtn");
            this.tryAgainBtn.on("click", this.clicked, this);
            this.game.addChild(this.tryAgainBtn);

            stage.addChild(this.game);
        }

        public clicked() {
            this.tryAgain = true;
        }

        public update() {
            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            stage.update();
        }
    }
}  