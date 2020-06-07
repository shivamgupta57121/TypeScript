class Point {
    
    constructor(public x:number){

    }
    get X() {
        return this.x;
    }
    
    set X(val : number) {
        this.x = val;
    }
    
}
let obj = new Point(10);
console.log(obj.X);
obj.X=20;
console.log(obj.X);