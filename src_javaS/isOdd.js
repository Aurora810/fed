function isOdd(value) {
    if (typeof (value) !== 'number') {
        return undefined;
    } else if (value >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(5));
console.log(isOdd(0));
console.log(isOdd('ciao'));
console.log(isOdd(-6));