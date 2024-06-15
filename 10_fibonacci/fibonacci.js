const fibonacci = function(n) {
    if (typeof n !== 'number') {
        n = parseInt(n);
    } else {
        n = n;
    }

    // Function recursively calls itself apart from some exclusions
    if (n === 1 || n === 2) {
        return 1;
    } else if (n === 0) {
        return 0;
    } else if (n < 0) {
        return "OOPS";
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
