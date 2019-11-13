"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addLetters(...letters) {
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
        sum += alfabeto.indexOf(letters[i]) + 1;
    }
    sum = sum % 26;
    if (sum == 0) {
        return 'z';
    }
    return alfabeto[sum - 1];
}
exports.addLetters = addLetters;
console.log(addLetters("a", "b"));
//# sourceMappingURL=add.js.map