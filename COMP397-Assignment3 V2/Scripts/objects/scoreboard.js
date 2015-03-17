var objects;
(function (objects) {
    var ScoreBoard = (function () {
        function ScoreBoard(game) {
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
        ScoreBoard.prototype.update = function () {
            this._livesTxt.text = "Lives: " + this.lives;
            this._scoreTxt.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map