interface ClInterface{
    name : string;
}

interface ClInterface2{
    age : number;
    func();
}


class class1 implements ClInterface, ClInterface2{
    
    constructor( public name : string, public age : number){

    }

    func(){
        console.log("Welcome To India");
    }
}

var obj1 = new class1("Abhay Gupta", 27);
console.log(obj1);
obj1.func();

var obj2: ClInterface = new class1("Anil Singh", 32);
console.log(obj2);
// obj2.func(); //Error since func does not exist on ClInterface 

var obj3: ClInterface2 = new class1("Ankit", 22);
console.log(obj3);
obj3.func();