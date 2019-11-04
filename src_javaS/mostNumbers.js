/*function mostNumbers(...numbers) {
    Math.abs(...numbers);
    if (numbers.length == 0) {
        return 0;
    }
    numbers.sort((a, b) => {
        
        if (a < b) {
           
            return -1;
        } else if (a = b) {
            return 0;
        } else {
            
            return 1;
        }
    }
    )
    
    return (numbers[numbers.length - 1] - numbers[0]);
}

console.log(mostNumbers(5, -5));*/


function mostNumbers(...numbers){
    if (numbers.length == 0) {
        return 0;
    }else{
    Math.max(...numbers);
    Math.min(...numbers);
    return Math.max(...numbers)-Math.min(...numbers);
    }
}

console.log(mostNumbers(5, -5));
console.log(mostNumbers(2,6,3));