//Author: Louis Smith
//File: mycar.ts
//Last Modified Date: 18/03/2015
//Description: This is the player character that can move up and down
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var MyCar = (function (_super) {
        __extends(MyCar, _super);
        //CONSTRUCTOR
        function MyCar() {
            _super.call(this, assetLoader.getResult("mycar"));
            this.safe = false;
            this._hit = false;
            this._counter = 0;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 100;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            createjs.Sound.play("engine", { loop: "-1" });
            this._drotate = 20;
            this._maxSpin = 360 * 3;
        }
        //PUBLIC METHODS
        MyCar.prototype.update = function () {
            this.y = stage.mouseY;
            if (this._hit) {
                this.rotation += this._drotate;
                this._counter += this._drotate;
                if (this._counter === this._maxSpin) {
                    this._counter = 0;
                    this._hit = false;
                    this.safe = false;
                    this.alpha = 1;
                }
            }
        };
        MyCar.prototype.hit = function () {
            this._hit = true;
            this.safe = true;
            this.alpha = 0.7;
        };
        return MyCar;
    })(createjs.Bitmap);
    objects.MyCar = MyCar;
})(objects || (objects = {}));
//# sourceMappingURL=mycar.js.map