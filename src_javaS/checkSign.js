function checkSign(value) {
    if (typeof (value) !== 'number') {
        return undefined;
    } else if (value >= 0) {
        return 'positive';
    } else {
        return 'negative';
    }

}

console.log(checkSign(5));
console.log(checkSign('ciao'));
console.log(checkSign(0));
console.log(checkSign(-6));