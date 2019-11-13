export function addLetters(...letters: string[]) {
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let sum: number = 0;
    for (let i = 0; i < letters.length; i++) {
        sum += alfabeto.indexOf(letters[i]) + 1;
    }
    sum = sum % 26;
    if (sum == 0) {
        return 'z';

    }
    return alfabeto[sum - 1];
}


console.log(addLetters("a","b"));