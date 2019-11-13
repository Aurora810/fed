function isSquare(n: number): boolean {
    if (Math.sqrt(n) % 1 === 0) {
        return true;
    } else {
        return false;
    }
}




console.log(isSquare(4));
console.log(isSquare(7));