"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    }
    else {
        return false;
    }
}
exports.setAlarm = setAlarm;
console.log(setAlarm(true, false));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));
console.log(setAlarm(true, true));
//# sourceMappingURL=alarm.js.map