

function getSingle(arrey) {
    arrey.sort(
        (a, b) => {
            if (a > b) {
                return -1;
            } else if (a === b) {
                return 0;
            } else {
                return 1;
            }
        );
    for (let i = 0; i < arrey.length; i + 2) {
        if (arrey[i] !== arrey[i + 2]) {
            return [i];
        }
    }
}



console.log(getSingle([1,1,2,2,3]);