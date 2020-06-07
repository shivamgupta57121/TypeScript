class Person{
    constructor(public name : string, public readonly age : number){

    }
}

var obj = new Person("Sam", 34);

console.log(obj);

obj.name = "Rahul";  
// obj.age = 12;        // Error since readonly
console.log(obj);

// ---------- Applying on Interface ----------

interface Interface{
    var1 : number;
    var2 : number;
}

var i1 : Interface = {
    var1: 53,
    var2: 23
}

console.log(i1);

i1.var1 = 12;
i1.var2 = 90;
console.log(i1);

var i2 : Readonly <Interface> = {
    var1: 22,
    var2: 34
}

// i2.var1 = 105;    // Error since readonly
// i2.var2 = 910;    // Error since readonly

console.log(i2);