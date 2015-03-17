var states;
(function (states) {
    var Menu = (function () {
        //Constructor
        function Menu() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Road Object
            this.road = new objects.Road();
            this.game.addChild(this.road);
            stage.addChild(this.game);
        }
        Menu.prototype.update = function () {
            this.road.update();
            stage.update();
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map