const repeatString = function(word, frequency) {
    let string = "";
    for (let i = 0; i < frequency; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
