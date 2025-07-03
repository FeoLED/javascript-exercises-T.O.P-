const convertToCelsius = function(degree) {
  let convert = ((degree-32)*(5/9))
  return Math.round(convert*10)/10
};

const convertToFahrenheit = function(dgr) {
  let convert = (dgr*(9/5))+32
  return Math.round(convert*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
