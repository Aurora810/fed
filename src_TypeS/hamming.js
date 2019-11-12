function hamming(left, right) {
    if (left.length !== right.length) {
        return undefined;
    }
    let result = 0;
    for (let i = 0, j = 0; i < left.length, j < right.length; i++ , j++) {
        if (left[i] !== right[j]) {
            result += 1;
        }


    }
    return result.toString();
}



console.log(hamming("1011101", "1001001"));
console.log(hamming("10374", "283549"));
console.log(hamming("2143896", "2233796"));