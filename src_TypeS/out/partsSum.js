"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partsSums(ls) {
    if (ls.length === 0) {
        return new Array(1).fill(0);
    }
    let totalSum;
    let len = ls.length - 1;
    while (len > 0) {
        let sum = 0;
        for (let i = 0; i < ls.length; i++) {
            sum += ls[i];
        }
        totalSum.push(sum);
        ls.unshift();
        len--;
        ls.push(0);
    }
    return totalSum;
}
exports.partsSums = partsSums;
function Add(ls) {
    let result = new Array(ls.length + 1).fill(0);
    let sum = 0;
    let n = ls.length;
    for (let i = n - 1; i >= 0; i--) {
        sum += ls[i];
        result[i] = sum;
    }
    return result;
}
console.log(Add([0, 1, 2, 3]));
//# sourceMappingURL=partsSum.js.map