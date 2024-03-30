// control statments
// > , < , >= , <= , == , != , ===(it checks the type as well) , !==


// if
const isUserLoggedIn = true

// if(2 == '2'){
//     console.log("Executed");
// }
// if(2 === '2'){
//     console.log("Executed");
// }
// ---------------------------------------------------------------------------------------------------

// This code gives error because scope problem but if we write var instead of const then we will get the output but it is not the good practice
// const score = 200
// if(score > 100){
//     const power = 'fly'
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);
// ---------------------------------------------------------------------------------------------------

// Short hand notation(if u want to write multiple lines then use (,) to & at last use (;))
// but this is unreadable & immature code
// const balance = 1000
// if(balance > 500) console.log("test"),
// console.log("test2");
// ---------------------------------------------------------------------------------------------------

// Nesting 
// const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log(`user balance is exactly ${balance}`);
// }
// ---------------------------------------------------------------------------------------------------

const userLoggedIn = false
const debitCard = false

if(userLoggedIn && debitCard){
    console.log("Serve the user");
} else if(userLoggedIn){
    console.log("Please enter debit Card details");
} else{
    console.log("Please follow the above method to purchase the items");
}