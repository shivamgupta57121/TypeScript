interface ClI{
    name:string;
}

class class1 implements ClI{
    name : string;
}

interface Interface extends class1{
    age : number;
}

var obj : Interface = { age: 36, name : "Michael"};
console.log(obj);