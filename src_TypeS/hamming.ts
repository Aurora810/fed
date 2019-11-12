function hamming(left: string, right: string): number {
    if (left.length !== right.length) {
        throw "invalid number";
    }
    let result: number = 0;
    for (let i: number = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            result += 1;
        }


    }
    return result;
}

try {
    console.log(hamming("1011101", "10010014"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log('done');
}

try {
    console.log(hamming("1011101", "1001001"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log('done');
}

try {
    console.log(hamming("1011101", ""));
} catch (exc) {
    console.log(exc);
} finally {
    console.log('done');
}

try {
    console.log(hamming("2143896", "2233796 "));
} catch (exc) {
    console.log(exc);
} finally {
    console.log('done');
}



