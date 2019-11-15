/*function threeWords(data) {


    for (let i = 0; i < arr.length; i++) {

        if (data[i]) {
            break;
        }


        let str = data.trim().split(" ");

        if (typeof (str[i]) !== typeof (str[i + 2])) {
            return false;
        }
        else {
            return true;
        }
    }

}*/

function threeWords(data) {
    let str = data.trim().split(" ");
    for (let i = 0; i < data.length; i++) {
        while (data[i] >= 'a' && data[i] <= 'z') {
            
            if (typeof (str[i]) === typeof (str[i + 2])) {
                return true;
            }else{
                return false;
            }
        }
    }
    return false;
}


console.log(threeWords(("bla bla bla bla")));
console.log(threeWords("He is 123 man"));
console.log(threeWords("Hello world hello"));
console.log(threeWords("hi"));
console.log(threeWords("123 123"));