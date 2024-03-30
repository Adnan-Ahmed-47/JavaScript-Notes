// Dates

let myDate = new Date()

// ################################# METHODS #########################################

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());

// -------------------------------------------------------------

// if u want to pass your own date then
// let myCreatedDate = new Date(2024, 0, 25) // month in js starts with 0 to 11
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 25, 5, 10) // u can also declare it in time
let myCreatedDate = new Date("2024-02-15")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()    
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // to convert from milliseconds to seconds

// -------------------------------------------------------------
// if u want to get the month or day etc from the object date

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getTime());