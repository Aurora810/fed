/*function numberRadix(strNumber, radix) {
    let rosetta = '012...XYZ';
    let number = Array.from(strNumber);
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < rosetta.length; j++) {
            if (number[i] === rosetta[j]) {
                number[i] = j;
            }
        }
    }
    for (let i = 0; i < number.length; i++) {
        if (number[i] > radix) {
            return undefined;
        }
    }
    number.reverse();
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result += number[i] * radix ** i;
    }
    return result;
}

console.log(numberRadix('AF', 16));*/

function numberRadix(strNumber, radix) {
    let base = { 0: 0, 1: 1, ...Z= 37};
    let baseAr = [0, 1..Z];
    let result = 0;
    prop = Object.keys(base);
    for (let i = strNumber.length - 1; i >= 0; i--) {
        result += prop[strNumber[i]] * (radix ** (strNumber.length - 1 - i));
    }

    return result;
}
console.log(numberRadix('AF', 16));