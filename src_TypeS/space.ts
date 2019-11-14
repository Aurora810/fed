export function noSpace(x: string): string {
    let result='';
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            result+= x[i];
        }
    }
    return result;
}

console.log(noSpace("c i a o"));
console.log(noSpace("ci a o"));