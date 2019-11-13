export function removeChar(str: string): string {
    
   let result=str.slice(1,-1);
    return result;
}


console.log(removeChar("ciao"));