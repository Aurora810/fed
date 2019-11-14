
class Animal {
    weight: number;
    name: string;
    constructor(weight: number, name: string) {
        this.weight = weight;
        this.name = name;
    }
    eat(): string {
        return this.name + " appena aver mangiato pesa " + this.weight + "kg";
    }

}

class Mammal extends Animal {
    energy: number;
    constructor(weight: number, name: string, energy: number) {
        super(weight, name);
        this.energy = energy;
    }
    eat(): string {
        return super.eat() + " e assume " + this.energy + " J.";
    }
}

class Horse extends Mammal implements Transporting{
    trans: number;
    type:string;
    constructor(weight: number, name: string, energy: number, trans: number,type:string) {
        super(weight, name, energy);
        this.trans = trans;
        this.type=type;
    }
    transport():string{
        return super.eat();
    }
    eat():string{
        return super.eat()+ " e può trasportare al massimo "+ this.trans+ this.type ;
    }
}

class Reptilis extends Animal {
    temp: number;
    constructor(weight: number, name: string, temp: number) {
        super(weight, name);
        this.temp = temp;
    }
    eat(): string {
        return "Il " + super.eat() + " è ha aumentato la temperatura di " + this.temp + " gradi.";
    }
}



interface Transporting {
    transport(): string;
}

let t: Transporting[]=[new Horse (20, "cavallo", 10,6,"persone")];
t.forEach((f)=>console.log(f.transport()));


let m: Animal[] = [new Mammal(20, "Zelda", 50)];
let r: Animal[] = [new Reptilis(20, "coccodrillo", 10)];
let c: Animal[] = [new Horse(20, "cavallo", 10,6,"persone")];


m.forEach((a) => {
    console.log(a.eat());
});
r.forEach((b) => {
    console.log(b.eat());
});
