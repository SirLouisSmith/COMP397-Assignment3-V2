//Author: Louis Smith
//File: scoreboard.ts
//Last Modified Date: 18/03/2015
//Description: This is the scoreboard file that keeps track of the
//  player lives and score and displays it
var objects;
(function (objects) {
    var ScoreBoard = (function () {
        function ScoreBoard(game) {
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
        ScoreBoard.prototype.update = function () {
            this._livesTxt.text = "Lives: " + this.lives;
            this._scoreTxt.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map