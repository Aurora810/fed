"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function move(pos, roll) {
    let result = 0;
    if (roll >= 1 && roll <= 6) {
        result += (roll + pos) + roll;
        return result;
    }
}
exports.move = move;
console.log(move(0, 4));
//# sourceMappingURL=dadi.js.map