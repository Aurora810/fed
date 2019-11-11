class Animal {
    constructor(name) {
        this.name = name;
    }
    getBrush() {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    getBrush() {
        return super.getBrush() + " è un " + this.race;
    }
}
class Cat extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    getBrush() {
        return super.getBrush() + " è un " + this.race;
    }
}
class Toy {
    constructor(type) {
        this.type = type;
    }
    getBrush() {
        return "Il mio cane gioca con il " + this.type;
    }
}
let items = [new Dog("Polly", "meticcio"), new Cat("Romeo", "trovatello"), new Toy('treccione')];
items.forEach((item) => console.log(item.getBrush()));
//# sourceMappingURL=interfaccia.js.map