function isEven(a) {
    if (typeof (a) !== 'Number'){
        return undefined;
    } else if (a % 2 === 0) {
        return true;
    } else {
        return undefined;
    }
}
console.log(isEven('ciao'));
console.log(isEven(4));










