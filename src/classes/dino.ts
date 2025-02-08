export default class DinoKeeper{
    name:string; 
    constructor (name:string){
        this.name = name;
    }
    sayHi():string{
        return this.name + ' says “hi”';
    }
}


const employee1 = new DinoKeeper("Joe");
console.log(employee1.sayHi());
// Joe says “hi”
