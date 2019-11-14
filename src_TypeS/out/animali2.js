class Animal {
    constructor(weight, name) {
        this.weight = weight;
        this.name = name;
    }
    eat() {
        return this.name + " appena aver mangiato pesa " + this.weight + "kg";
    }
}
class Mammal extends Animal {
    constructor(weight, name, energy) {
        super(weight, name);
        this.energy = energy;
    }
    eat() {
        return super.eat() + " e assume " + this.energy + " J.";
    }
}
class Horse extends Mammal {
    constructor(weight, name, energy, trans, type) {
        super(weight, name, energy);
        this.trans = trans;
        this.type = type;
    }
    transport() {
        return super.eat();
    }
    eat() {
        return super.eat() + " e può trasportare al massimo " + this.trans + this.type;
    }
}
class Reptilis extends Animal {
    constructor(weight, name, temp) {
        super(weight, name);
        this.temp = temp;
    }
    eat() {
        return "Il " + super.eat() + " è ha aumentato la temperatura di " + this.temp + " gradi.";
    }
}
let t = [new Horse(20, "cavallo", 10, 6, "persone")];
t.forEach((f) => console.log(f.transport()));
let m = [new Mammal(20, "Zelda", 50)];
let r = [new Reptilis(20, "coccodrillo", 10)];
let c = [new Horse(20, "cavallo", 10, 6, "persone")];
m.forEach((a) => {
    console.log(a.eat());
});
r.forEach((b) => {
    console.log(b.eat());
});
//# sourceMappingURL=animali2.js.map