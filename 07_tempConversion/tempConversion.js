const convertToCelsius = function(fahrenheitDegree) {
  return Math.round((fahrenheitDegree - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(celciusDegree) {
  return (Math.round((celciusDegree) * 9 / 5 * 10) / 10) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
