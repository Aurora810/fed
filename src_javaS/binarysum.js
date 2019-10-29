function binarySum(left, right) {
    if (typeof (left) !== 'number' || typeof (right) !== 'number') {
        return undefined;
    } else if (left === 0 && right === 1 || left === 1 && right === 0) {
        return 1;
    } else {
        left === 1;
        right === 1;
        return 0;
    }
}
console.log(binarySum(1, 0));
console.log(binarySum('ciao', 1));
console.log(binarySum(0, 1));
console.log(binarySum(1, 1));
console.log(binarySum(0, 0));
