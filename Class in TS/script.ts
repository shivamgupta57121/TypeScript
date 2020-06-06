// ------ Class ------
class human{

    // Constructor
    constructor(public firstName: string, public lastName: string, private age?: number, private height?: number, private eyeColor?: string){

    }
    // getName method
    getName(){
        console.log("The name is " + this.firstName + " " + this.lastName);
    }

    // getAllData method
    getAllData(){

        console.log("The name is " + this.firstName + " " + this.lastName);

        if(this.age == undefined) console.log("The age is top secret");
        else console.log("The age is "+this.age);

        if(this.height == undefined) console.log("The height is not mentioned");
        else console.log("The height is "+this.height);

        if(this.eyeColor == undefined) this.eyeColor = "Not Mentioned";
        console.log("The eye color is "+this.eyeColor);

    }
};

var person1 = new human("Arjun","Rawat");
//person1.getName();
person1.getAllData();

var person2 = new human("Shivangi","Gupta",32,170,"blue");
person2.getAllData();