interface Brush {
    getBrush(): string;
}

class Animal implements Brush {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getBrush(): string {
        return this.name;
    }
    
}
class Dog extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    getBrush(): string {
        return super.getBrush() + " è un " + this.race;
    }
}


class Cat extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    getBrush(): string {
        return super.getBrush() + " è un " + this.race;
    }
}


class Toy implements Brush {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    getBrush(): string {
        return  "Il mio cane gioca con il " + this.type;
    }
}

let items: Brush[] = [new Dog("Polly","meticcio"),new Cat("Romeo","trovatello"), new Toy('treccione')];
items.forEach((item) => console.log(item.getBrush()));