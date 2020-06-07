class Point {
    
    constructor(private _x:number){

    }
    get x() {
        return this._x;
    }
    
    set x(val : number) {
        this._x = val;
    }
    
}
let obj = new Point(10);
console.log(obj.x);
obj.x=20;
console.log(obj.x);