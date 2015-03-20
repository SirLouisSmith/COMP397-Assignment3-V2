//Author: Louis Smith
//File: text.ts
//Last Modified Date: 18/03/2015
//Description: This managers the text labels that can be placed in the game
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Text = (function (_super) {
        __extends(Text, _super);
        function Text(x, y, labelText) {
            _super.call(this, labelText, "40px Impact", "#ff0000");
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            this.x = x;
            this.y = y;
        }
        return Text;
    })(createjs.Text);
    objects.Text = Text;
})(objects || (objects = {}));
//# sourceMappingURL=text.js.map