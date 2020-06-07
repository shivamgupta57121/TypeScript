var Point = /** @class */ (function () {
    function Point(x) {
        this.x = x;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (val) {
            this.x = val;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var obj = new Point(10);
console.log(obj.X);
obj.X = 20;
console.log(obj.X);
