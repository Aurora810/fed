"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bmi(weight, height) {
    let arr = ["Underweight", "Normal", "Overweight", "Obese"];
    let result = weight / Math.pow(height, 2);
    if (result <= 18.5) {
        return arr[0];
    }
    if (result <= 25) {
        return arr[1];
    }
    if (result <= 30.0) {
        return arr[2];
    }
    if (result > 30) {
        return arr[3];
    }
    else {
        throw new Error("The method or operation is not implemented.");
    }
}
exports.bmi = bmi;
console.log(bmi(7, 9));
console.log(bmi(1000, 6));
//# sourceMappingURL=BMI.js.map