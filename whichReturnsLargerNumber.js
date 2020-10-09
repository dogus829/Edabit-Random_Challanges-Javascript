function whichIsLarger(f, g) {
    if (f == g) {
        return "neither";
    } else if (f > g) {
        return "f";
    } else {
        return "g";
    }
}

console.log(whichIsLarger(5, 10));
console.log(whichIsLarger(10, 5));
console.log(whichIsLarger(2, 1));
console.log(whichIsLarger(22, 2));
console.log(whichIsLarger(5, 4));
console.log(whichIsLarger(23, 4));
console.log(whichIsLarger(2, 42));
console.log(whichIsLarger(2, 42));