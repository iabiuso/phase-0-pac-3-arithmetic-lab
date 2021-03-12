beforeEach(function () {
    a = Math.floor(Math.random() * 1000)
    b = Math.floor(Math.random() * 1000)
})


function add() {
    return a += 5;
}

function subtract() {
    return a -= 5;
}

function multiply() {
    return a *= 5;
}

function divide() {
    return a /= 5;
}

function add(a,b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function increment(a){
    return (a + 1);
}

function decrement(a) {
    return (a - 1);
}

function makeInt(a){
    return parseInt(a, 10);
}


function preserveDecimal(a) {
    return parseFloat(a);
}