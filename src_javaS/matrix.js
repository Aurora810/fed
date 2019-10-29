
let data = [
    [3, 4, 5],
    [5, 6, 8]
]
a = [[2, 3]];
b = [[4, 6]];



function matrixRowHead(matrix) {
    let sum = [];
    for (let i = 0; i < matrix.length; i++) {
        let rowsum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowsum += matrix[i][j];
        }
        sum.push(rowsum);
    }
    return sum;
}


console.log(matrixRowHead(a));
console.log(matrixRowHead(b));
console.log(matrixRowHead(data));


a = [[1, 3]];
b = [[4, 6]];
let ciao = [
    [3, 7, 8],
    [5, 20, 0]
]
c = [[]];

function matrixColHead(matrix) {
    if (matrix.length === []) {
        return undefined;
    } else {
        let colnum = matrix.length;
        let sum = [];
        for (let i = 0; i < colnum; i++) {
            let colsum = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                colsum = colsum + matrix[i][j];
            }
            sum.push(colsum);
        }

        return sum;
    }

}

console.log(matrixColHead(a));
console.log(matrixColHead(b));
console.log(matrixColHead(ciao));
console.log(matrixColHead(c));
