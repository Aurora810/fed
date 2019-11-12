export function howMuchILoveYou(petals: number): string {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    while (petals > arr.length) {
      petals = petals - arr.length;
}
return arr[petals-1];

}

console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(15));