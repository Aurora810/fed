function greetings(name: string) {
    return "Hello, " + name;
}

console.log(greetings("TypeScript"));

class Person {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;



    }
    fullInfo(): string {
        return this.first + ' ' + this.last;
    }
}


let p: Person = new Person('Tom', 'Jones');

let persons = [new Person('a', 'b'), new Person('c', 'd'), p, new Person('e', 'f')];


console.log(p.fullInfo());
console.log(persons[1]);



persons.forEach((p) => {
    console.log(p.fullInfo());
});


class Persona {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
    set fullName(name: string) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
    static merge(p1: Persona, p2: Persona) {
        return new Persona(p1.first + p2.first, p1.last + p2.last)
    }


}

let pi = new Persona('Aurora', 'Perrucci');
pi.fullName = 'Aurora Perrucci';
console.log(pi.fullName);

let tom = new Persona('Tom', 'Jones');
let bob = new Persona('Bob', 'Hope');

console.log(Persona.merge(tom, bob).fullName);




