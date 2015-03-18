//Author: Louis Smith
//File: gas.ts
//Last Modified Date: 17/03/2015
//Description: This is the item that gives points when the player collects it
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Gas = (function (_super) {
        __extends(Gas, _super);
        //CONSTRUCTOR
        function Gas() {
            _super.call(this, "gas");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //This is x
            this.x = 720;
            this.y = 32 + (Math.random() * (480 - 64));
            this._dx = 4;
            this.reset();
        }
        //PUBLIC METHODS
        Gas.prototype.update = function () {
            this.x -= this._dx;
            if (this.x <= -(this.width / 2) - 10) {
                this.reset();
            }
        };
        Gas.prototype.reset = function () {
            this.x = 720;
            this.y = 32 + (Math.random() * (480 - 64));
        };
        return Gas;
    })(objects.GameObject);
    objects.Gas = Gas;
})(objects || (objects = {}));
//# sourceMappingURL=gas.js.map