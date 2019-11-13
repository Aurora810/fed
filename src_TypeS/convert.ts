export function stringToArray(s: string): string[] {
    return s.trim().split(" ")
}

console.log(stringToArray("ciao amici"));