function sayHi(name, age) {
    if(typeof(name)!=='string'||typeof(age)!=='number'){
        return undefined;
    }else{
        return `Hi. My name is ${name} and I'm ${age} old`;
    }
}


console.log(sayHi('Aurora',22));
console.log(sayHi(33,55));






