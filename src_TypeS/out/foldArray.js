"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foldArray(array, runs) {
    let ar;
    let cant = 0;
    while (cant < runs) {
        ar = new Array(Math.ceil(array.length / 2));
        for (let i = 0; i < ar.length; i++) {
            ar[i] = array[i];
        }
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            ar[i] = array[i] + array[array.length - 1 - i];
        }
        array = ar;
        cant += 1;
    }
    return ar;
}
exports.foldArray = foldArray;
console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5], 2));
console.log(foldArray([1, 2, 3, 4, 5], 3));
console.log(foldArray([1, 2, 3, 4, 5], 4));
//# sourceMappingURL=foldArray.js.map