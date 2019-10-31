function digitsMultip(data) {

    if (typeof (data) !== 'number') {
        return undefined;
    }
    else {
        let product = 1;
        let  molt= 1;
        while (data !== 0) {
            if (data % 10 === 0) {
                molt = Math.floor(data / 10);
                molt = data % 10 * product;
                data = Math.floor(data / 10);
            } else {
                product = data % 10 * product;
                data = Math.floor(data / 10);
            }


        }
        return product;
    }

}

console.log(digitsMultip(123));
console.log(digitsMultip(340));
console.log(digitsMultip(100));