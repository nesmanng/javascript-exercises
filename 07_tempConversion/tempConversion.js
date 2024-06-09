const convertToCelsius = function(temperature) {
  let convertedTemperature = Math.round((temperature - 32) * (5/9) * 10) / 10;
  return convertedTemperature;
};

const convertToFahrenheit = function() {
  let convertedTemperature = Math.round(((temperature * (9/5)) + 32) * 10) / 10;
  return convertedTemperature
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
