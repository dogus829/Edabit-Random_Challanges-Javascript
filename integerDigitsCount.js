//Function that counts the integer's number of digits.

function integerDigitsCounter(num) {
    let count = 1;
    // Postive  
    while (num / 10 >= 1) {
        num /= 10;
        ++count;
    };
    // nums is -200 
    while (num < 0) {
        while (num / -10 >= 1) {
            num /= 10;
            ++count;
            if (num > -10) {
                return count;
            }
        }
    };

    return count;
}


console.log(integerDigitsCounter(-510));
console.log(integerDigitsCounter(-522));
console.log(integerDigitsCounter(-52232));
console.log(integerDigitsCounter(5223)); // Works only w/ positives. 