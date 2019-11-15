"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkForFactor(base, factor) {
    if (base % factor === 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkForFactor = checkForFactor;
console.log(checkForFactor(10, 2));
//# sourceMappingURL=factor.js.map