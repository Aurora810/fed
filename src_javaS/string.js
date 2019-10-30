function sumBinary(left, right) {
    let carry = 0;
    let result = [];
    for (let i = left.length - 1; i >= 0; i--) {
        let sx = Number(left[i]);
        let dx = Number(right[i]);
        let sum = sx + dx + carry;
        switch (sum) {
            case 0:
                result[i] = '0';
                carry = 0;
                break;
            case 1:
                result[i] = '1';
                carry = 0;
                break;
            case 2:
                result[i] = '0';
                carry = '1';
                break;
            case 3:
                result[i] = '1';
                carry = '1';
                break;
        }
    }

    let sResult = result.join("");
    if (carry==1) {    //carry==1 è falsy, viene sottinteso
        sResult = 1 + sResult;  // non mettiamo += 1 perchè lo vogliamo mettere all'inizio piuttosto che alla fine
    }
    return sResult;
}


console.log('risultato: ', sumBinary('101','011'));




























// '101' e '010', leggo i caratteri da destra li trasformo in numero e faccio la somma, faccio due variabili 'risult' e carry', in risult metto i risultati nel carry metto i riporti, alla fine sommo il primo il secondo numero e il carry