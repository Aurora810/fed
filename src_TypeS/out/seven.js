"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function seven(m) {
    let count = 0;
    while (m > 99) {
        let div = Math.floor(m / 10);
        let resto = m % 10 * 2;
        m = div - resto;
        count += 1;
    }
    return [m, count];
}
exports.seven = seven;
console.log(seven(1021));
//# sourceMappingURL=seven.js.map