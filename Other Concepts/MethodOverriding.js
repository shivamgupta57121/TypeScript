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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eating = function (food) {
        if (food === void 0) { food = "none"; }
        console.log(this.name + " eats " + food);
    };
    return Person;
}());
var cls1 = /** @class */ (function (_super) {
    __extends(cls1, _super);
    function cls1(name) {
        return _super.call(this, name) || this;
    }
    cls1.prototype.eating = function (food) {
        if (food === void 0) { food = "Pasta"; }
        console.log("Class 1");
        _super.prototype.eating.call(this, food);
    };
    return cls1;
}(Person));
var cls2 = /** @class */ (function (_super) {
    __extends(cls2, _super);
    function cls2(name) {
        return _super.call(this, name) || this;
    }
    cls2.prototype.eating = function (food) {
        if (food === void 0) { food = "Pizza"; }
        console.log("Class 2");
        _super.prototype.eating.call(this, food);
    };
    return cls2;
}(Person));
var obj = new Person("John");
obj.eating();
var obj1 = new cls1("Mark");
obj1.eating();
var obj2 = new cls2("Jack");
obj2.eating();
