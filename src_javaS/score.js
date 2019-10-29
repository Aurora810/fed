function score(x, y) {
    let point = distance(0,x,0,y);
    if (point <= 1) {
        return 10;
    } else if (point <= 5 && point > 1) {
        return 5;
    } else {
        return 0;
    }

}

console.log(score(4, 6));