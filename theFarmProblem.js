// Calculates number of legs.

const animalLegCounter = function (chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);

}
console.log(animalLegCounter(2, 3, 5));
console.log(animalLegCounter(1, 2, 3));
console.log(animalLegCounter(5, 2, 8));