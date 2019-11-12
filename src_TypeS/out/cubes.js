function findNb(m) {
    let sum = 0;
    for (let i = 0; sum < m; i++) {
        sum = Math.pow(i * (i + 1), 2) / 4;
    }
    if (sum === m) {
        let i = 0;
        return i - 1;
    }
    else {
        return (-1);
    }
}
function find_Nb(m) {
    if (Math.pow(1, 3) == m) {
        return 1;
    }
    else {
        let n = 2;
        let volume = 1;
        while (volume < m) {
            volume = volume + Math.pow(n, 3);
            if (volume == m) {
                return n;
            }
            else {
                n = n + 1;
            }
            continue;
        }
    }
    return -1;
}
console.log(find_Nb(1071225));
//# sourceMappingURL=cubes.js.map