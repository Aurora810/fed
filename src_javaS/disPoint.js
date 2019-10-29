function disPoint(x1,x2,y1,y2){
    if(typeof(x1)!=='number'||typeof(x2)!=='number'||typeof(y1)!=='number'||typeof(y2)!=='number'){
        return undefined;
    }else{
        let ascisse= Math.abs(x1-x2);
        let ordinate=Math.abs(y1-y2);
        return Math.sqrt((x1-x2)**2+(y1-y2)**2);
    }
}
console.log(disPoint(1,2,3,4));
console.log(disPoint('ciao',4,5,'io'));