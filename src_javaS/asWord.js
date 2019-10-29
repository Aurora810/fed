function asWord(value) {
    if (typeof (value) !== 'number') {
        return undefined;
    } switch (value) {
        case 0:
            return 'zero';
            break;
        case 1:
            return 'one';
            break;
        case 2:
            return 'two';
            break;
        case 3:
            return 'three';
            break;
        case 4:
            return 'four';
            break;
        case 5:
            return 'five';
            break;
        case 6:
            return 'six';
            break;
        case 7:
            return 'seven';
            break;
        case 8:
            return 'eight';
            break;
        case 9:
            return 'nine';
            break;

    }
}

console.log(asWord(0));
console.log(asWord(1));
console.log(asWord(2));
console.log(asWord(3));
console.log(asWord(4));
console.log(asWord(5));
console.log(asWord(6));
console.log(asWord(7));
console.log(asWord(8));
console.log(asWord(9));
