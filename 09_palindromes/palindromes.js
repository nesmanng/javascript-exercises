const palindromes = function (str) {
    // Defining a function to remove any spaces and special characters from the string
    function removeSpaces (str) {
        return str.replace(/[^a-z0-9 ]/gi, '');
    }

    // Prepocesssed string is converted to lowercase and words are joined together
    const newString = removeSpaces(str.toLowerCase()).replace(/\s+/g, '');

    // Reversing the string
    const reversedString = newString.split('').reverse().join('');
    
    if (newString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
