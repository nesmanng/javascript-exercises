const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(...numbers) {
	return numbers.reduce((power, current) => power ** current);
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
      let result = 1
      for (let i = number; i > 1; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
