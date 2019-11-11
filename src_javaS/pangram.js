function isPangram(str) {
    if (typeof (str) !== "string") {
        throw "Not a string";
    }
    if (str.length < 26) {
        return false;
    }
    let aux = new Set(["a", "b", ..."z"]);
    for (let i = 0; i < str.length; i++) {
        if (aux.has(str[i].toLowerCase)) {
            aux.delete(str[i].toLowerCase); //se trova nella stringa tutti i caratteri str avrà lunghezza 0 perchè li ho cancellati
        } else {
            continue;
        }
    } if (aux.size === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isPangram("ciao"));
console.log(isPangram("Everybody knows one or two pangrams"));