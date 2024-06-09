const sumAll = function(int1, int2) {
    let sumTotal = 0;
    if (int1 < int2) {
        for (let i = int1; i <= int2; i++) {
            sumTotal += i;
        }
    } else if (int1 > int2) {
        for (let i = int2; i <= int1; i++) {
            sumTotal += i;
        }
    } else {
        sumTotal += 0
    }
    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
