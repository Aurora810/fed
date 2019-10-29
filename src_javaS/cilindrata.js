function cilindrata(alesaggio, corsa, cilindri) {
    if  (typeof (corsa) !== 'number' || typeof (alesaggio) !== 'number' || typeof (cilindri) !== 'number'){
        return undefined;
    } else {
        return cilindri * (corsa * (alesaggio / 2) ** 2 * Math.PI) / 1000;
    }
}

console.log(cilindrata(77, 85.44, 4));
