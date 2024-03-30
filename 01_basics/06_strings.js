const name = 'Adnan '
const age = 50

// It is the old concept to display by using + again & again
// console.log(name + age + " Value");

// But in modern day we use string interpollation (``)
// console.log(`Hello my name is ${name} and my age is ${age}.`);

// One more method to declare a string
const gameName = new String('Adnanad  hl') // here it'll come as an object
// it'll give u the key value pair as an object & also provides with the methods of string in the browser console
// console.log(gameName);

// ######################################## METHODS ##############################################

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // it hasn't changed original string
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));  // 3rd index pe konsa character hai 
// console.log(gameName.indexOf('a')); //konse position pe konsa character hai
// console.log(gameName.indexOf('A'));

// SUB STRING
// const newString = gameName.substring(0, 4)
// console.log(newString)
// console.log(gameName.substring(1, 5));
// console.log(gameName.substring(1, 11));

// SLICE : u can give -ve values also it'll reverse it
// console.log(gameName.slice(4, -5));
// console.log(gameName.slice(-11, 5));

// TRIM: many times in the form the user will add unnecessary spaces 
// it will trim only start and end spaces but not middle spaces
// console.log(gameName.trim());

// REPLACE: if u want to replace particular char with other
const url = 'https://adnan.com/adnan%20ahmed'
// console.log(url);
// console.log(url.replace('%20', '-'))

// INCLUDES
// console.log(url.includes('ahmed'));


// If you want to convert the string into an array
// SPLIT: converts the string into an array
const newStr = 'Adnan-Ahmed'
// console.log(gameName.split('  '))
// console.log(newStr.split('-'))  



