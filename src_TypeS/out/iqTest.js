/*function iqTest(numbers: string): number {
    let num = numbers.split(" ");
    let odd = 0;
    let even = 0;
    let position = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            odd++;
            if (odd === 1) {
                position = num.indexOf(num[i]) + 1;
            }
        }
        else if (num[i] % 2 === 0) {
            even++;
            if (even === 1) {
                position = num.indexOf(num[i]) + 1;
            }
        }
    }
    return position;
}*/
function iqTest(numbers) {
    numbers = numbers.split(' ');
    let positions = [[], []];
    for (let i = 0; i < numbers.length; i++) {
        positions[numbers[i] % 2].push(i + 1);
    }
    if (positions[0].length === 1)
        return positions[0][0];
    if (positions[1].length === 1)
        return positions[1][0];
    return 0;
}
console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("2 4 5 8"));
console.log(iqTest("1 2 1 1"));
console.log(iqTest("3 4 6 8"));
console.log(iqTest("4 6 8 3"));
//# sourceMappingURL=iqTest.js.map