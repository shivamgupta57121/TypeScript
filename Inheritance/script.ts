class class1{
    var1 : string;
    constructor(var1:string){
        this.var1 = var1;
        console.log("Hi");
    }
}

class class2 extends class1{
    var2 : string;
    constructor(var2: string, var1: string){
        super(var1);
        this.var2 = var2;
        console.log("All");
    }
}

var ob1 = new class1("First Class");
console.log(ob1);

var ob2 = new class2("Child Class", "Parent Class");
console.log(ob2);