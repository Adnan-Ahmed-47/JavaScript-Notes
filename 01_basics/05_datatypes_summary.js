// JavaScript is a dynamically typed language i.e, no need to declare the type of a variable ..

// ---------------------------------------------------------------------
// Primitive(Call By Value)  ===> stack mein save hota
// will make a copy of varibles and do changes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Examples:
const score = "100"
const scoreValue = 100
const isLoggedIn = true
const outsideTemp = null
let userEmail;

// It'll be unique though the value is same
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

// ---------------------------------------------------------------------

// Non-Primitive(Call by reference) ===> heap mein save hota
// will get the reference i.e, changes is done in original value
// Array, Objects, Functions

const arr = ["one", "Two", "Three"]

let obj = {
    name: "Adnan", 
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

// ---------------------------------------------------------------------

// #################### Stack(Primitive), Heap(Non Primitive) ###########


// Stack mein store hora
let myYoutubename = 'hiteshchoudharydotcom'

let anothername = myYoutubename
anothername = 'chaiaurcode'

console.log(myYoutubename);
console.log(anothername);


// Heap mein store hora
let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'hitesh@google.com'

console.log(userOne.email)
console.log(userTwo.email)

