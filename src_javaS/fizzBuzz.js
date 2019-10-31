function fizzBuzz(data) {
    if (data % 3 === 0 && data % 5 === 0) {
        return 'Fizz Buzz';
    } else if (data % 3 === 0 && data % 5 !== 0) {
        return 'Fizz';
    } else if (data % 5 === 0 && data % 3 !== 0) {
        return 'Buzz';

    } else {
        return data.toString();
    }

}
console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(25));
console.log(fizzBuzz(34));


