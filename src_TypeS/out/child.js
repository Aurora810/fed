function ball(h, b, w) {
    let conteggio = 0;
    if (!(h > 0 && w < h && b > 0 && b < 1)) {
        return -1;
    }
    else {
        while (h > w) {
            conteggio += 1;
            h *= b;
            if (h > w) {
                conteggio += 1;
            }
        }
        return conteggio;
    }
}
console.log(ball(8, 0.5, 4));
console.log(ball(10, 0.5, 3));
//# sourceMappingURL=child.js.map