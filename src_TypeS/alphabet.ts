export function solve(str: string[]) {
    let arr: number[] = new Array(str.length).fill(0);
    let alphabet:string[]=;
    for (let i = 0; i < str.length; i++) {["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let str2 = str[i].toLowerCase();
        for(let j=0; j<str2.length;j++){
            if(str2[j]==alphabet[j]){
                arr[i]+=1;
            }
        }
    }
    return arr;

}

console.log(solve(["abfde"]));