// const userEmail = 'a@sldk.ai' // yahan tak toh theek hai 
// const userEmail = ""  // agar ye print karaye toh else condition print hoga 
const userEmail = []  // aur agar ye print karye toh phir if condition print hora isi liye truthy values use karte

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("User email not found");
// }

// -------------------------------------- TRUTHY & FALSY VALUES ------------------------------------------

// Falsy values (kin kin values ko false mana jayega)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values (baaki sab truthy values kehlate hain)
// "0", "false", " ", [], {}, function(){}

// IN browser
// false == 0 --> true
// false == '' --> true
// 0 == '' --> true

// ---------------------------------------------------------------------------------------------------

// if u have an empty array & if u want to check it using if else then 
const user = []

// if(user.length === 0){
//     console.log("Array is empty");
// }

// ---------------------------------------------------------------------------------------------------

// if u have an empty object & if u want to check it using if else then 

const empObj = {}

// if(Object.keys(empObj)){     // yahan ek array banke aajata hai keys ka
//     console.log("Object is empty");
// }// ya phir ham ise aise bhi use kar sakte hain

// if(Object.keys(empObj).length === 0){     // yahan ek array banke aajata hai keys ka
//     console.log("Object is empty");
// }

// ---------------------------------------------------------------------------------------------------
// Nullish Coalescing Operator (??): null undefined
// database use karte samay use karte hain

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);

// ---------------------------------------------------------------------------------------------------
// TERNARY OPERATOR
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("Less than 80") : console.log("more than 80");


