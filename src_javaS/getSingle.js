

function getSingle(arrey) {
    arrey.sort(
        (a, b) => {
            if (a > b) {
                return -1;
            } else if (a === b) {
                return 0;
            } else {
                return 1;
            }
        );
    for (let i = 0; i < arrey.length - 1 +; i += 2) {
        if (i == 0) {
            if (arrey[i] !== arrey[i += 2]) {
                return [i];
            }
            continue;
        } else {
            return undefined;
        }
    }
}





console.log(getSingle([1, 1, 2, 2, 3]);

//IL COSTO DI UN SORTING è O(nlogn), in questo caso sorting + for è O(n)



function Single(value) {
    for (let i = 0; i < value.length; i++) {
        let unique = true;
        for (let j = 0; j < value.length; j++) {
            if (i === j) {
                continue;
            } if (value[i] === value[j]) {
                unique = false;
            }
        }
        if (unique) {
            return value[i];
        }
    }
    return undefined;
}

console.log(Single([1, 2, 3, 2, 1]));

//ha un costo O(n^2) perchè per ogni valore di i scorro i e j lungo tutta la launghezza dell'arrey (n*n)

function singleGet(vector) {
    ht = {};
    for (i: 0→vector.length) {
        ht[vestor[i]] = false;
    } for (i: 0→vector.length) {
        ht[vector[i]] = !ht[vector[i]]; //negazione, negato n volte pari ritorna true, dispari torna false
    } for (i: 0→vector.length) {
        if (ht[vector[i]] === true) {
            return vector[i];
        }
    }

    return undefined;
}

console.log(singleGet([1,2,5,7,7,2,1]));

//se cancello le prime 3 righe dopo l'inizializzaizone di ht, sto negando un undefined che è falsy allora diventa true e funziona ugualmente