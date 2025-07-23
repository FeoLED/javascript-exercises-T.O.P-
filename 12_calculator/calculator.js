const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((counter, current)=>{
    return counter + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((counter, current)=>{
    return counter*current;
  },1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	let fac = 1;
  for(let i=1; i<=num;i++){
        fac = fac * i;
    }
  return fac;
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
