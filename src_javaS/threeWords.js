function threeWords(data) {
    let arr = data.trim().split("")
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === 'number'&&arr[j]==='number') {
                return false;
            }
            if (arr[i] === arr[j]) {
                return true;
            }
            else {
                return false;
            }
        }
    }

}


console.log(threeWords(("bla bla bla bla")));
console.log(threeWords("He is 123 man"));