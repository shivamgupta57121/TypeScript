abstract class person {
    name:string;
    abstract eyeColor : string = "dsdm";
    constructor(name : string) {
        this.name = name;
    }
    fun1(){     // Not necessary to implement in derived class
        console.log("Function 1");
    }
    abstract func2();
}

class  person1 extends person {
    age: number;
    eyeColor: string;
    constructor(name : string, age: number) {
        super(name);
        this.age = age;
    }
    func2(){
        console.log(this.name + " and " + this.age);
    }
}

var obj1 = new person1("Raj",25);
obj1.func2();
