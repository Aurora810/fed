export function foldArray(array: number[], runs: number): number[] {
    let ar: number[];
    let cant: number = 0;
    while (cant < runs) {
        ar = new Array(Math.ceil(array.length / 2));
        for (let i = 0; i < ar.length; i++) {
            ar[i] = array[i];
        }
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            ar[i] = array[i] + array[array.length - 1 - i];
        }
        array = ar;
        cant += 1;
    }
    return ar;
}

console.log(foldArray([1, 2, 3, 4, 5],1));
console.log(foldArray([1, 2, 3, 4, 5],2));
console.log(foldArray([1, 2, 3, 4, 5],3));
console.log(foldArray([1, 2, 3, 4, 5],4));