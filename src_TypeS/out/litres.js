"use strict";
/*export function litres(time: number): number {
    let water: number = 0.5;
    let result = water * time;
    if (result % 1 !== 0) {
        return Math.floor(result);
    } if (time === 0) {
        return result = 0;
    }else{
        return 0;
    }

}*/
Object.defineProperty(exports, "__esModule", { value: true });
function litres(time) {
    return Math.floor(time / 2);
}
exports.litres = litres;
console.log(litres(3));
console.log(litres(0));
console.log(litres(1.4));
console.log(litres(1));
//# sourceMappingURL=litres.js.map