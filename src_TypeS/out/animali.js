class furredAnimals {
    constructor(food, age) {
        this.food = food;
        this.age = age;
    }
    brush() {
        return "L'animale ha " + this.age + " anni e mangia " + this.food;
    }
}
class Dog extends furredAnimals {
    constructor(food, age) {
        super(food, age);
    }
    brush() {
        return super.brush() + " al pollo.";
    }
}
class Cat extends furredAnimals {
    constructor(food, age) {
        super(food, age);
    }
    brush() {
        return super.brush() + " umido.";
    }
}
let a = new Dog("crocchette", 5);
let b = new Cat("cibo", 7);
console.log(a.brush());
console.log(b.brush());
class Animal {
    constructor(name) {
        this.name = name;
    }
    brush() {
        return "I am brushing " + this.name;
    }
}
class Dogs extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + " of race " + this.race;
    }
}
let vect = [new Dogs("Polly", "meticcio.")];
vect.forEach((x) => {
    console.log(x.brush());
});
//# sourceMappingURL=animali.js.map