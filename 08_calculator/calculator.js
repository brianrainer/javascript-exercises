const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numList) {
	let sum = 0;
  numList.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(numList) {
    if (numList.length === 0) {
      return 0;
    }

    let sum = 1;
    numList.forEach(element => {
      sum *= element;
    });
    return sum;
};

const power = function(num, pow) {
	if (pow === 0) {
    return 1;
  }

  if (pow === 1) {
    return num;
  }

  let isNegative = (pow < 0);
  if (isNegative) {
    pow = -pow;
  }

  let sum = 1;
  for (let i = 0; i < pow; i++) {
    sum *= num;
  }

  if (isNegative) {
    return 1.0 / sum;
  }

  return sum;
};

const factorial = function(num) {
  let sum = 1;
	for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
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
