// console.log("A");
// console.log("d");
// console.log("n");
// console.log("a");
// console.log("n");  
// if I want to display the above code 10 times then u will get problem, so we use functions here

// FUNCTION DEFINITION
function sayMyName() {
    console.log("A");
    console.log("d");
    console.log("n");
    console.log("a");
    console.log("n");
}

// sayMyName   // function ka reference
// sayMyName()   // function ka execution

// ------------------------------------------------------------------------------------------------------------
// jab aap function declaration ke time pe jo input dete hain use parameters kehte hain
// jab aap function call karte samay values pass karte hain use arguments

// isme hamne function se value return nahi karayi balke hamne sirf console print karaya 
// function addTwoNumbers(num1, num2){  // parameters

//     console.log(num1 + num2);
// }
// addTwoNumbers(5, 5)     // arguments


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}
const result = addTwoNumbers(100, 100)

// console.log("Result: ", result);

// ------------------------------------------------------------------------------------------------------------
// other methods to write a function & display it
function loginUserMessage(username= "sam"){   // you can also give the default value 
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
// console.log(loginUserMessage("Adnan"))

// ------------------------------------------------------------------------------------------------------------
// REST OPERATOR: Passing multiple values in a function

// if we r working on a cart & the user is selecting so many orders in a cart then

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2)) 
//yahan tak theek hai par agar user apne cart mein aur items add karta ja raha hai  then we use rest operator

// ---------------------------------------

// The below ... is also called rest as well as spread operator according to the usecase
// function calculateCartPrice(...num1){  // REST OPERATOR
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 600))


function calculateCartPrice(val1, val2, ...num1){  
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 1000)) // yahan par val1 ne liya 200 & val2 ne liya 400 ab baaki ji jo cheezein hain woh display hongi jaise ke [600, 1000]

// ------------------------------------------------------------------
// How to pass an object in a function & use it in a function

const user = {
    username: "adnan",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)  // u can also pass the object here instead of declaring it above as given below

// handleObject({
//     username: "sam",
//     price: 399
// })

// ------------------------------------------------------------------
// How to pass an array in a function & use it in a function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getarray){
    return getarray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 233, 333]));






