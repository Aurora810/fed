"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toAlternatingCase(s) {
    const out = s.split("").map((char) => {
        if (char.match(/[a-z]/)) {
            return char.toUpperCase();
        }
        else if (char.match(/[A-Z]/)) {
            return char.toLowerCase();
        }
        else {
            return char;
        }
    }).join("");
    return out;
}
exports.toAlternatingCase = toAlternatingCase;
console.log(toAlternatingCase("12233"));
console.log(toAlternatingCase("ciao"));
console.log(toAlternatingCase("CiAo"));
//# sourceMappingURL=alternating.js.map