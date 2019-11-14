export const centuryFromYear = (year: number): number => {
    if (year % 10 === 0) {
        return year / 100;
    } else {
        return Math.floor((100 + year) / 100);
    }
}


console.log(centuryFromYear(1200));
console.log(centuryFromYear(1309));
console.log(centuryFromYear(1200.5));