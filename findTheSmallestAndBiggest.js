const testArray = [1, 5, 3, 10, 11, 223, 2, 25];

function minMax(numbers) {

    var largest = numbers[0];
    var smallest = numbers[0];

    for (var i = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            largest = numbers[i];
        } else if (numbers[i] < smallest) {
            smallest = numbers[i];
        }

    }
    console.log(largest);
    console.log(smallest);
}

minMax(testArray);