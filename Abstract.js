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
var person = /** @class */ (function () {
    function person(name) {
        this.eyeColor = "dsdm";
        this.name = name;
    }
    person.prototype.fun1 = function () {
        console.log("Function 1");
    };
    return person;
}());
var person1 = /** @class */ (function (_super) {
    __extends(person1, _super);
    function person1(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    person1.prototype.func2 = function () {
        console.log(this.name + " and " + this.age);
    };
    return person1;
}(person));
var obj1 = new person1("Raj", 25);
obj1.func2();
