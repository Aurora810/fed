export function move(pos: number, roll: number) {
    let result = 0;
    if (roll >= 1 && roll <= 6) {
        result += (roll + pos) + roll;
        return result;
    }
}

console.log(move(0, 4));