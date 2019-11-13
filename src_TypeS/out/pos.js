"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function posAverage(s) {
    let vect = s.split(',');
    let cont = 0;
    let norm = 0;
    for (let i = 0; i < vect.length - 1; i++) {
        for (let j = i + 1; j < vect.length; j++) {
            for (let k = 0; k < vect[0].length; k++) {
                norm++;
                if (vect[i][k] == vect[j][k]) {
                    cont++;
                }
            }
        }
    }
    return (cont * 100 / norm);
}
exports.posAverage = posAverage;
console.log(posAverage("6900690040"));
//# sourceMappingURL=pos.js.map