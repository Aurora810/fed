export function checkForFactor(base: number, factor: number) {
    if (base % factor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForFactor(10,2));