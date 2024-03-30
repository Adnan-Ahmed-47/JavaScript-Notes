// this keyword in objects

const user = {
    username: "adnan",
    price: 999, 

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);  // current context refers to empty object in node environment

// NOTE: agar aap browser mein this ko console karenge toh aapku window aaye ga kyunki browser mein global scope window hai par node mein object hai isiliye woh empty object display kar raha hai

// ---------------------------------------------------
// this keyword in functions

function chai(){
    const username = 'adnan'
    // console.log(this); // kitne ki values de raha hai node environment mein
    console.log(this.username); // function ke andar this ko access nahi kar pa rahe hain
}

const chai1 = function(){
    const username = 'adnan'
    console.log(this.username);
}

// chai()
// chai1()


// ############################## Arrow functions ########################################

const arrFunc = () => {
    let username = 'adnan'
    console.log(this);
    console.log(this.username);
}
// arrFunc()

// Basic arrow function with explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2  // if this is confusing then use the below 

// const addTwo = (num1, num2) => (num1 + num2)

// if u want to return an object then
const addTwo = (num1, num2) => ({username: 'adnan'})

console.log(addTwo(3,8))