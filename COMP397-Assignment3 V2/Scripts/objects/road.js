var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Road = (function (_super) {
        __extends(Road, _super);
        //CONSTRUCTOR
        function Road() {
            _super.call(this, assetLoader.getResult("road"));
            this._dx = 2;
            this.width = this.getBounds().width;
            //This is x
            this.x = 0;
            this.reset();
        }
        //PUBLIC METHODS
        Road.prototype.update = function () {
            this.x -= this._dx;
            if (this.x <= -(this.width / 2) - 10) {
                this.reset();
            }
        };
        Road.prototype.reset = function () {
            this.x = 0;
        };
        return Road;
    })(createjs.Bitmap);
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map