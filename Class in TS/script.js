// ------ Class ------
var human = /** @class */ (function () {
    // ------ Constructor ------
    function human(firstName, lastName, age, height, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.eyeColor = eyeColor;
    }
    // getName method
    human.prototype.getName = function () {
        console.log("The name is " + this.firstName + " " + this.lastName);
    };
    // getAllData method
    human.prototype.getAllData = function () {
        console.log("The name is " + this.firstName + " " + this.lastName);
        if (this.age == undefined)
            console.log("The age is top secret");
        else
            console.log("Age is " + this.age);
        if (this.height == undefined)
            console.log("The height is not mentioned");
        else
            console.log("The height in cms is " + this.height);
        if (this.eyeColor == undefined)
            this.eyeColor = "Not Mentioned";
        console.log("The eye color is " + this.eyeColor);
    };
    return human;
}());
;
var person1 = new human("Arjun", "Rawat");
person1.getName();
person1.getAllData();
var person2 = new human("Shivangi", "Gupta", 32, 170, "blue");
person2.getAllData();
