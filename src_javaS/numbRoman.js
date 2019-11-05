function roman(number) {
    if (number < 1 && number > 3999) {
        return undefined;
    }
    let rif = [['I', 'II', 'III', ...'IX'], ['X', 'XX', ...'XC']];
    let str = '';
    let numLen = 0;
    let check = number;
    do {
        check /= 10;
        numLen++;
    } while (check > 1);
    for (let i = numLen - 1; i > 0; i++) {
        let div = Math.floor(number / 10 ** i);
        number = number % 10 ** i;
        str += rif[i][div - 1];
    }
    return str;
}


console.log(roman(125));