// Convers a binary number
// into decimal number.

// Only takes numbers below 1024.

function decimaltoBinary(x) {
    let bin = 0;
    let rem, i = 1,
        step = 1;

    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log('Binary :' + bin);

};

decimaltoBinary(9);
decimaltoBinary(92);
decimaltoBinary(10);
decimaltoBinary(10002);
decimaltoBinary(100);