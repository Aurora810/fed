function countInversion(array) {
    let invers = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                 invers += 1;
            }
        }
    }
    return invers;
}

console.log(countInversion([1, 2, 5, 3, 4, 6, 7]));