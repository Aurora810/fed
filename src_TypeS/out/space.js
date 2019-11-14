"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function noSpace(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            result += x[i];
        }
    }
    return result;
}
exports.noSpace = noSpace;
console.log(noSpace("c i a o"));
console.log(noSpace("ci a o"));
//# sourceMappingURL=space.js.map