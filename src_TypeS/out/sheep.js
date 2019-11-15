"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countSheeps(arrayOfSheep) {
    let str = arrayOfSheep.join();
    let pres = 0;
    let ass = 0;
    let nuovo = str.trim().split(" ");
    for (let i = 0; i < nuovo.length; i++) {
        if (nuovo[i] === "true") {
            pres += 1;
        }
        if (nuovo[i] === "false") {
            ass += 1;
        }
    }
    return "There are " + pres + " sheeps in total, not " + ass + ".";
}
exports.countSheeps = countSheeps;
console.log(countSheeps(["true true true false true true true true true true true true true true true true true treu true false"]));
//# sourceMappingURL=sheep.js.map