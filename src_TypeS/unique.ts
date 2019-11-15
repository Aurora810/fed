export function findUniq(arr: number[]): number {
   
    for (let i = 0; i < arr.length; i+=2) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }
   
}

console.log(findUniq([1,1,2,1,1]));
console.log(findUniq([1,2,2,]));
console.log(findUniq([2,2,1]));
console.log(findUniq([3,3,3,3,3,3,5,3,3,]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));