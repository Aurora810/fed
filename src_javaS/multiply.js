function multTwo(a, b) {
    if (typeof (a) !== 'number' && typeof (b) !== 'number') {
        return undefined;

    } else {
        return a *= b;
    }
}
console.log(multTwo(4, 0));
console.log(multTwo('ciao', 9));
console.log(multTwo(9,8));

function multiply(c, d) {
    if (typeof (c) !== 'number' || typeof (d) !== 'number') {
        return undefined;
    } else {
        c *= d;
        return 0;
    }
}


console.log(multiply(4, 5));
console.log(multiply('ciao', 8));
console.log(multiply(1,0));