function isArmstrong(value) {
    let str = value.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i] ** str.length;
        Number(value);
    } if (sum === value) {
        return true;
    } else {
        return false;
    }
}

console.log(isArmstrong(153));
console.log(isArmstrong(234));
console.log(isArmstrong(407));
