function xo(str: string) {
    str = str.toLowerCase();
    let nrX = '';
    let nrO = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            nrX += str[i];
        } if (str[i] === 'o') {
            nrO += str[i];
        }
    }
    if (nrO.length === nrX.length) {
        return true;
    }
    else {
        return false;
    }
}

console.log(xo("xxoo"));
console.log(xo("xxo"));
console.log(xo("XxOo"));
console.log(xo("xxmoo"));
console.log(xo("xo"));
console.log(xo("oo"));
console.log(xo("zpzpz"));