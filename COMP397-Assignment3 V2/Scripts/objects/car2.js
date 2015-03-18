// Author: Louis Smith
// File: car2.ts
// Last Modified Date: 18/03/2015
// Description: This is a second version of the enemy,
//  with a random chance to change lanes
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Car2 = (function (_super) {
        __extends(Car2, _super);
        // CONSTRUCTOR
        function Car2(lane) {
            _super.call(this, "car2");
            this._up = false;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._lane = lane;
            this.x = 720;
            this.y = (32 + this.height * 0.5) + ((this.height + 2) * this._lane);
            this._lane1 = this.y;
            this._lane2 = this.y + this.height + 2;
            this._dx = Math.floor((Math.random() * 3) + 4);
            this._dy = 1;
            this.reset();
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._magicNum = Math.floor(Math.random() * constants.RND_RANGE);
            this._picker = Math.floor(Math.random() * constants.RND_RANGE);
        }
        // PUBLIC METHODS
        Car2.prototype.update = function () {
            this.x -= this._dx;
            if (this._magicNum === this._picker) {
                if (!this._up) {
                    this.y += this._dy;
                    if (this.y >= this._lane2) {
                        this._up = true;
                        this._picker = Math.floor(Math.random() * constants.RND_RANGE);
                    }
                }
                if (this._up) {
                    this.y -= this._dy;
                    if (this.y <= this._lane1) {
                        this._up = false;
                        this._picker = Math.floor(Math.random() * constants.RND_RANGE);
                    }
                }
            }
            if (this._magicNum !== this._picker) {
                this._picker = Math.floor(Math.random() * constants.RND_RANGE);
            }
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        };
        Car2.prototype.reset = function () {
            this.x = 720;
            this._dx = Math.floor((Math.random() * 4) + 5);
        };
        return Car2;
    })(objects.GameObject);
    objects.Car2 = Car2;
})(objects || (objects = {}));
//# sourceMappingURL=car2.js.map