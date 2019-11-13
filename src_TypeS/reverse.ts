export function solution(str: string): string {
    let ar: string[] = str.split('');
    let inv=ar.reverse();

    return inv.join('');
}



console.log(solution('ciao'));