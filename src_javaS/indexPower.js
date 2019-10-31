function indexPower(array, n) {
    if (n < 0 || n >= array.length) {
        return -1;
    } else {

        return array[n] ** n;
    }

}

console.log(indexPower([1, 3, 4], 2));
console.log(indexPower([2, 5, 6], 5));
console.log(indexPower([1,2,34],3));
console.log(indexPower([2,5,7],1));