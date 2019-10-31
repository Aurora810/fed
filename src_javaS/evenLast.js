function evenLast(data) {
    let product = 1;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            sum = data[i] + sum;
            product = sum * data[data.length - 1];
        } 

    }
    return product;
}


console.log(evenLast([0, 1, 2, 3, 4, 5]));
console.log(evenLast([1, 2, 5]));
console.log(evenLast([]));