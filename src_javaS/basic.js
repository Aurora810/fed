/*function isEven(a) {
    if typeof ((a) !== 'Number'){
        return undefined;
    } else if (a % 2 === 0) {
        return true;
    } else {
        return undefined;
    }
}
console.log(isEven('ciao'));

function cilindrata(alesaggio, corsa, cilindri) {
    if  (typeof (corsa) !== 'number' || typeof (alesaggio) !== 'number' || typeof (cilindri) !== 'number'){
        return undefined;
    } else {
        return cilindri * (corsa * (alesaggio / 2) ** 2 * Math.PI) / 1000;
    }
}

console.log(cilindrata(77, 85.44, 4));


function disPoint(x1,x2,y1,y2){
    if(typeof(x1)!=='number'||typeof(x2)!=='number'||typeof(y1)!=='number'||typeof(y2)!=='number'){
        return undefined;
    }else{
        let ascisse= Math.abs(x1-x2);
        let ordinate=Math.abs(y1-y2);
        return Math.sqrt((x1-x2)**2+(y1-y2)**2);
    }
}
console.log(disPoint(1,2,3,4));
console.log(disPoint('ciao',4,5,'io'));

function score(x, y) {
    let point = distance(0,x,0,y);
    if (point <= 1) {
        return 10;
    } else if (point <= 5 && point > 1) {
        return 5;
    } else {
        return 0;
    }

}

console.log(score(4, 6));

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
console.log(asWord(9));*/




function matrixColHead(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        rowsum = 0;
        for (let j = 0; j < data[i].lenght; j++) {
            rowsum += data[i][j];
        }
    }
    return sum;
}
let data=[
    [2,3],
    [4,6],
    [6,7,8],
]

console.log(matrixColHead(data));