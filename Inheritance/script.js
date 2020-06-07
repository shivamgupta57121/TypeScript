var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class1 = /** @class */ (function () {
    function class1(var1) {
        this.var1 = var1;
        console.log("Hi");
    }
    return class1;
}());
var class2 = /** @class */ (function (_super) {
    __extends(class2, _super);
    function class2(var2, var1) {
        var _this = _super.call(this, var1) || this;
        _this.var2 = var2;
        console.log("All");
        return _this;
    }
    return class2;
}(class1));
var ob1 = new class1("First Class");
console.log(ob1);
var ob2 = new class2("Child Class", "Parent Class");
console.log(ob2);
