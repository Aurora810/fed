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


function romani(value) {
    if (number < 1 && number > 3999) {
        return undefined;
    }
    let n = Math.floor(value / 1000);
    let resto = value % 1000;
    let d = Math.floor(resto / 500);
    resto = resto % 500;
    let x = Math.floor(resto / 10);
    resto = resto % 10;
    ...//altre lettere come i num romani
    let i = resto % 5;
    let roman = '';
    for (let j = 0; j < n; j++) {
        roman += 'M';
    }
    if (d === 1 && c === 4) {
        roman += 'CM';
    } else if (d === 1 && c < 4) {
        roman += 'D';
        for (let j = 0; j = c; j++) {
            roman += 'C';
        }
    } else if (d === 0 && c === 4) {
        roman += 'CD';
    } else {
        for (let j = 0; j < c; j++) {
            roman += 'C';
        }
    }

}