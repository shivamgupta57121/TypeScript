// ------ Data Types ------
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
// ------ Functions ------
function fun1(a) {
    if (a == undefined)
        console.log("Nothing!");
    else
        console.log(a);
}
fun1();
fun1("Hi All!");
// ------ Arrays ------ 
var arr = ["hello", "hi", 8, true];
var z = true;
console.log(arr);
// ------ All about quotes ------ 
var _wittyAI = "I think therefore I 'am' -- sentient.";
var _wittyReply = "No, you only \"think\", so you aren't.";
console.log(_wittyAI, _wittyReply);
// ------ let VS var ------ 
function fv() {
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++)
            console.log(j);
    }
    //console.log(i); // error because let is block scoped
    console.log(j);
}
//console.log(j); // error beacuse var is function scoped
fv();
// ------ Array and Tuples ------ 
var arr1 = [6, 8];
arr1.push(9);
console.log(arr1);
var tuples = ["hi", 6, true];
tuples.push("welcome", 8);
console.log(tuples);
// var tuples1:[string, number, boolean] = ["hi", 6]; // error but js can run it.
// console.log(tuples1);
var tuples2 = ["hi", "again", 6];
tuples2.push("wel", "y");
tuples2.push("welcome", "you", 8);
console.log(tuples2);
// ------ Unions in TS ------
var var1;
var1 = "String";
console.log(var1);
var1 = 5;
console.log(var1);
var arr2;
arr2 = ["hi", "all"];
console.log(arr2);
arr2 = [3, 4, 5, 7];
console.log(arr2);
var person1 = {
    Name: "Anshuman",
    Age: 32,
    greetings: function () { return "Hello"; }
};
console.table(person1);
var person2 = {
    Name: "Kiran",
    Age: 28,
    greetings: function () { return "Hello"; }
};
console.table(person2);
console.table([person1, person2]);
// ------ Table View ------ 
var users = [
    { name: "Ram", age: 37 },
    { name: "Shyam", age: 43 },
    { name: "Geeta", age: 26 },
];
console.table(users);
var arr4;
arr4 = ["abc", "xyz"];
console.log(arr4);
console.table(arr4);
