"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wave(str) {
    let arr = [];
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        }
        else {
            let str2 = str.slice(0, i) + str[i].toUpperCase() + str.slice(1 + i);
            arr.push(str2);
        }
    }
    return arr;
}
exports.wave = wave;
console.log(wave("ciao"));
console.log(wave("ci ao"));
//# sourceMappingURL=wave.js.map