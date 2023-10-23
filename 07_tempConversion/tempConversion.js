const convertToCelsius = function(num) {
  let sum = (num - 32) * 5/9;
  return Number(sum.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let sum = (num * 9/5) +32;
  return Number(sum.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

