var Point = /** @class */ (function () {
    function Point(_x) {
        this._x = _x;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var obj = new Point(10);
console.log(obj.x);
obj.x = 20;
console.log(obj.x);
