"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(str) {
    let ar = str.split('');
    let inv = ar.reverse();
    return inv.join('');
}
exports.solution = solution;
console.log(solution('ciao'));
//# sourceMappingURL=reverse.js.map