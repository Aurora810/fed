/*function sumBinary(left, right) {
    let sum = '';
    for (let i = 0, j = 0; i < left.length, j < right.length; i++ , j++) {
        if (i==left.length&&j==right.length){
           let sum=left+right;
           return (sum).toString();

        }else{
            return 'ciao';
        }
   }


}

console.log(sumBinary('110','101'));
console.log(sumBinary('1','1'));*/

function addBinary(left,right){
    let sum=left+right;
    
    return (sum).toString();
}
console.log(addBinary('110','101'));