class Person{
    constructor(public name : string ){

    }
    eating(food = "none"){
        console.log(this.name + " eats " + food);
    }
}

class cls1 extends Person{
    constructor(name : string ){
        super(name);
    }
    eating(food = "Pasta"){
        console.log("Class 1");
        super.eating(food);
    }
}

class cls2 extends Person{
    constructor(name : string ){
        super(name);
    }
    eating(food = "Pizza"){
        console.log("Class 2");
        super.eating(food);
    }
}

var obj = new Person("John");
obj.eating();

var obj1 = new cls1("Mark");
obj1.eating();

var obj2 = new cls2("Jack");
obj2.eating();
