var class1 = /** @class */ (function () {
    function class1(name, age) {
        this.name = name;
        this.age = age;
    }
    class1.prototype.func = function () {
        console.log("Welcome To India");
    };
    return class1;
}());
var obj1 = new class1("Abhay Gupta", 27);
console.log(obj1);
obj1.func();
var obj2 = new class1("Anil Singh", 32);
console.log(obj2);
// obj2.func(); //Error since func does not exist on ClInterface 
var obj3 = new class1("Ankit", 22);
console.log(obj3);
obj3.func();
