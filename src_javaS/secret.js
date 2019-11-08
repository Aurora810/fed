



function findMessage(data) {
    let solution = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= 'a' && data[i] <= 'z') {
            return solution = '';
        }
        if (data[i] >= 'A' && data[i] <= 'Z') {
            solution += data[i];
            for (let j = i + 1; j < data.length; j++) {
                
                if (data[j] >= 'A' && data[j] <= 'Z') {
                    solution += data[j];

                }
            }

            return solution;
        }
    }
}

console.log(findMessage('Ciao Ora Sale Alba'));
console.log(findMessage('fhne'));
console.log(findMessage('123Bia'));