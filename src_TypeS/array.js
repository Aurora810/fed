function exer(array) {
    let as = Array(5).fill(0);
    return as;
}

console.log(exer([]));


let array2 = [4, 3, 5, 1, 7, 12];
array2.sort(
    function f(a, b) {
        if (a > b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    })

console.log([array2]);

function pezzo(array) {
    let sliced = array.slice(1, 3);
    return sliced;
}

console.log(pezzo([1, 6, 4, 6]));

function dispari(array) {
    let odds = array.filter(value => value % 2);
    return odds;
}

console.log(dispari([3, 5, 6, 9, 2]));

function crea() {
    let mySet = new Set(iterable);

    mySet.add(1);
    mySet.add(5);
    mySet.add("some text");
    let o = {a: 1, b: 2};
    mySet.add(o);
    for(i of myset){
        console.log(i);
    }
}



