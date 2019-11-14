function gps(s, x) {
    if (x.length <= 1) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < x.length - 1; i++) {
        result += (3600 * (x[1 + i] - x[i])) / s;
        return Math.floor(result);
    }
}
console.log(gps(7, [3, 5]));
//# sourceMappingURL=gps.js.map