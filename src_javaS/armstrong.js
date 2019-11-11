function isArmstrong(value) {
    if (value !== 'number') {
        return undefined;
    } if (value < 0 && value % 10 !== 0) {
        return undefined;
    }
    let str = value.toSring();
    for (let i = 0; i < str.length; i++) {
        let result = i ** str.length;
        result.Number();
        sum += result;
        if (sum === value) {
            return true;
        } else {
            return false;
        }

    }
}

console.log(isArmstrong(153));