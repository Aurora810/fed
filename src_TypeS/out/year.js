"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = (year) => {
    if (year % 10 === 0) {
        return year / 100;
    }
    else {
        return Math.floor((100 + year) / 100);
    }
};
console.log(exports.centuryFromYear(1200));
console.log(exports.centuryFromYear(1309));
console.log(exports.centuryFromYear(1200.5));
//# sourceMappingURL=year.js.map