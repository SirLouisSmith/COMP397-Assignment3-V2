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
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 100;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            createjs.Sound.play("engine", { loop: "-1" });
        }
        //PUBLIC METHODS
        MyCar.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return MyCar;
    })(createjs.Bitmap);
    objects.MyCar = MyCar;
})(objects || (objects = {}));
//# sourceMappingURL=mycar.js.map