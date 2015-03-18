//Author: Louis Smith
//File: menu.ts
//Last Modified Date: 18/03/2015
//Description: This is the menu state where you can start the game

module states {
    export class Menu {
        //Game Objects
        public game: createjs.Container;

        public title: createjs.Bitmap;
        public playBtn: objects.Button;
        public play: boolean = false;
        //Constructor
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Title Image
            this.title = new createjs.Bitmap(assetLoader.getResult("title"));
            this.title.x = 120;
            this.title.y = 50;
            this.game.addChild(this.title);

            //Play Button
            this.playBtn = new objects.Button(320, 280, "playBtn");
            this.playBtn.on("click", this.clicked, this);
            this.game.addChild(this.playBtn);

            stage.addChild(this.game);
        }

        public clicked() {
            this.play = true;
        }

        public update() {
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            stage.update();
        }
    }
} 