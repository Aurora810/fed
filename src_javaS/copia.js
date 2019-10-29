function fullAdder(a, b, carry) {
    const sumAdd = a ^ b;
    const carryAdd = (Number(a) && Number(b)).toString();
    halfAdd = [sumAdd, carryAdd];
    const sum = carry ^ halfAdd[0];
    carry = (Number(carry) && halfAdd[0]).toString();
    carry = (Number(carry) || halfAdd[1]).toString();
    return [sum, carry];
}

function sumBinary(a, b) {
    let sum = '';
    let carry = '';
    for (let i = a.length - 1; i >= 0; i--) {
        if (i == a.length - 1) {
            
            const halfAdd1 = fullAdder([i], b[i], 0);
            sum = halfAdd1[0] + sum;
            carry = halfAdd1[1];
        } else {
            
            const fullAdd = fullAdder(a[i], b[i], carry);
            sum = fullAdd[0] + sum;
            carry = fullAdd[1];
        }
    }
    return carry ? carry + sum : sum
}

console.log(sumBinary('101', '100'));