// ------ Data Types ------

let a: number ;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
enum Color { Red = 0, Green = 1, Purple = 2, Blue = 3 };
let backgroundColor = Color.Red;


// ------ Functions ------

function fun1(a?:string) : void
{
    if(a==undefined) console.log("Nothing!");
    else console.log(a);
}

fun1();
fun1("Hi All!");


// ------ Arrays ------ 

var arr = ["hello", "hi", 8, true];
var z:boolean=true;  
console.log(arr);


// ------ All about quotes ------ 

const _wittyAI = "I think therefore I 'am' -- sentient.";
const _wittyReply = "No, you only \"think\", so you aren't.";
console.log(_wittyAI,_wittyReply);


// ------ let VS var ------ 

function fv(){
    for(let i=0;i<2;i++){
        for(var j=0;j<2;j++)
            console.log(j);
    }
    //console.log(i); // error because let is block scoped
    console.log(j);
}
//console.log(j); // error beacuse var is function scoped
fv();


// ------ Array and Tuples ------ 

var arr1 : number[] = [6, 8];
arr1.push(9);
console.log(arr1);

var tuples : any[] = ["hi", 6, true];
tuples.push("welcome", 8);
console.log(tuples);

// var tuples1:[string, number, boolean] = ["hi", 6]; // error but js can run it.
// console.log(tuples1);

var tuples2:[string, string,number] = ["hi","again", 6];

tuples2.push("wel","y");
tuples2.push("welcome","you", 8);
console.log(tuples2);


// ------ Unions in TS ------

var var1:string|number;
var1 = "String";
console.log(var1);
var1 = 5;
console.log(var1);

var arr2 : string[]|number[];
arr2 = ["hi","all"];
console.log(arr2);
arr2 = [3,4,5,7];
console.log(arr2)


// ------ Interfaces ------

interface Person  {
    Name: string; 
    Age: number,
    greetings: ()=> string 
}

var person1 = {
    Name : "Anshuman",
    Age: 32,
    greetings : ()=>{ return "Hello" ; }
}
console.table(person1);

var person2 = {
    Name : "Kiran",
    Age: 28,
    greetings : ()=>{ return "Hello" ; }
}
console.table(person2);
console.table([person1, person2]);


// ------ Table View ------ 

const users = [
    {name:"Ram", age: 37},
    {name:"Shyam", age: 43},
    {name:"Geeta", age: 26},
]
console.table(users);


// ------ Array Interfaces ------ 

interface ArrayInterface {
    [index:number] :string;
}
var arr4 : ArrayInterface;
arr4 = ["abc", "xyz"];

console.log(arr4);
console.table(arr4);
