const add = function(num1, num2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
};

const subtract = function(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
	  return num1 - num2;
  }
};

const sum = function(Arr) {
  let output = 0;

	for (i of Arr) {
    if (typeof i === "number") {
    output += i;
    } 
  }
  return output;
};


const multiply = function(numArray) {
  let result = numArray[0];

  for(let i = 1; i <= numArray.length -1; i++) {
    if (typeof numArray[i] === "number") {    
      result *= numArray[i];
    }
  }
  return result;

};

const power = function(num1, num2) {	
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1;
    for (i=1; i<num2; i++) {
      result *= num1;
    }
    return result;
  }

};

const factorial = function(num) {
  if (typeof num === "number") {
    if (num === 0) {return 1;}

    let x = num;
    for(let i= num-1; i > 0; i--) {
      x *= i;
    }
    return x;
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

