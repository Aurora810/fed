export function posAverage(s: string): number {
    let vect: string[] = s.split(',');
    let cont: number = 0;
    let norm: number = 0;
    for (let i = 0; i < vect.length-1; i++) {
        for (let j = i + 1; j < vect.length; j++) {
            for (let k = 0; k < vect[0].length; k++) {
                norm++;
                if (vect[i][k] == vect[j][k]) {
                    cont++;
                }
            }
        }
    }
    return (cont * 100 / norm);
}

console.log(posAverage("6900690040"));