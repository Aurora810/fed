export function seven(m: number): number[] {
    
    let count=0;
    
    while (m > 99) {
        let div=Math.floor(m/10);
        let resto = m % 10*2;
        
        m= div - resto;
        count+=1;
        

    }
    return [m,count];
}

console.log(seven(1021));