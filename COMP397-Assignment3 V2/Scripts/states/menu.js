//Author: Louis Smith
//File: menu.ts
//Last Modified Date: 19/03/2015
//Description: This is the menu state where you can start the game
var states;
(function (states) {
    var Menu = (function () {
        //Constructor
        function Menu() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Title Image
            this.title = new createjs.Bitmap(assetLoader.getResult("title"));
            this.title.x = 120;
            this.title.y = 30;
            this.game.addChild(this.title);
            this.instTxt = "You're driving against traffic.\nAvoid getting hit by upcoming traffic.\nCollect gas to gain points.";
            this.instructions = new objects.Text(780, 200, this.instTxt);
            this.game.addChild(this.instructions);
            //Play Button
            this.playBtn = new objects.Button(320, 300, "playBtn");
            this.playBtn.on("click", this.clicked, this);
            this.game.addChild(this.playBtn);
            stage.addChild(this.game);
        }
        Menu.prototype.clicked = function () {
            this.play = true;
        };
        Menu.prototype.update = function () {
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update();
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map