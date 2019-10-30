let a=[1,1];
function fibo(n){
    if(n===1||n===0){
        return a[n];
    }else{
        if(a[n]=undefined){
            a[n]=fibo(n-1)+fibo(n-2);
            return a[n];
        }
    }
}

console.log(fibo(3));
