const score = 400
// console.log(score);

// NUMBER
const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);

// ################################# NUMBER METHODS #########################################

// to String --> converts the datatype to string
// console.log(balance.toString().length);

// toFixed() --> float value will be fixed to 2 numbers after decimal
// console.log(balance.toFixed(2));

// toPrecision() --> returns a string, range from 1-21
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2)); 
// console.log(otherNumber.toPrecision(3));

// toLocaleString --> it will give in the form of US standards
const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // US standard
// console.log(hundreds.toLocaleString('en-IN')); // Indian standard


// ################################# MATHS #########################################

console.log(Math); // run it in the browser to get the detailed information

// console.log(Math.abs(-4)); // converts -ve to +ve value
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(125).toFixed(2))

// Min Max in an array
// console.log(Math.min(2,5,1,7))
// console.log(Math.max(2,5,1,7))

// Math.random
// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)





