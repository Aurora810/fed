function findMessage(data) {
    let solution = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= 'A' && data[i] <= 'Z') {
            solution= solution.concat(data[i]);
        } else {
            return -1
        }
        return solution;
    }
}

console.log(findMessage('CiaoOraSaleAlba'));