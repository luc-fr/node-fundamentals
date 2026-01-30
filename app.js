function multiply(n1, n2) {
    return n1 * n2;
}

function double(number) {
    return multiply(number, 2);
}

function printDouble(number) {
    const result = double(number);
    console.log(result)
}

printDouble(5);

module.exports = multiply;