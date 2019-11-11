class furredAnimals {
    food: string;
    age: number;
    constructor(food: string, age: number) {
        this.food = food;
        this.age = age;
    }
    brush(): string {
        return "L'animale ha " + this.age + " anni e mangia " + this.food;
    }
}

class Dog extends furredAnimals {
    constructor(food: string, age: number) {
        super(food, age);

    }
    brush(): string {
        return super.brush() + " al pollo.";
    }
}

class Cat extends furredAnimals {
    constructor(food: string, age: number) {
        super(food , age);

    }
    brush(): string {
        return super.brush() + " umido.";
    }
}


let a = new Dog("crocchette", 5);
let b = new Cat("cibo", 7);

console.log(a.brush());
console.log(b.brush());



class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    brush(): string {
        return "I am brushing " + this.name;
    }
}
class Dogs extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush(): string {
        return super.brush() + " of race " + this.race;
    }
}


let vect: Animal[]=[new Dogs("Polly","meticcio.")];
vect.forEach((x)=> {console.log(x.brush());
    
});