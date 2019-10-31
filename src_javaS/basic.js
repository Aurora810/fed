function isEven(a) {
    if (typeof (a) !== 'Number'){
        return undefined;
    } else if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven('ciao'));
console.log(isEven('4'));
console.log(isEven(2));










