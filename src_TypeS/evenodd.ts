export function even_or_odd(n: number): String {

    if (n % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(even_or_odd(4));