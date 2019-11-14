


    export function toAlternatingCase(s: string): string {
        const out = s.split("").map((char: string) => { 
          if (char.match(/[a-z]/)) { 
            return char.toUpperCase();
          } else if (char.match(/[A-Z]/)) {
            return char.toLowerCase();
          } else { 
            return char
          }
        
      }).join("");
      
      return out;
    }

    console.log(toAlternatingCase("12233"));
    console.log(toAlternatingCase("ciao"));
    console.log(toAlternatingCase("CiAo"));