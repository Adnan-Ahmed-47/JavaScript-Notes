// scope: {} --> if else ka scope , function ka scope , loop ka scope etc
// NOTE: Node ka scope alag hota hai aur browser ka scope alag hota hai

// Global scope (var): is ki value hame block mein available hoti hai
// Block scope (let, const): is ki value bahar nahi jaani chahiye

// you can access a global scope inside the block scope but cannot access a block scope in global scope

// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("inner: " , a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------------------------------------
// NESTED SCOPE : child ke variables parent ko access kar pate hain

function one(){
    const username = "adnan"

    function two(){
        const website = 'youtube'
        console.log(username);  // yahan pe func2 username ko global scope maan raha hai
    }
    // console.log(website); // yahan pe website ka scope khatam ho chuka hai

    two()
}

// one()

// --------------------------------------------
// if else

if(true){
    const username = "adnan"
    if(username== "adnan"){
        const website = ' youtube'
        // console.log(username + website);
    }
    // console.log(website);  // error
}

// console.log(username);  // error


// ############################## interesting ####################################

// ye basic function 

console.log(addone(5));  // ham isko aise bhi access kar sakte hain

function addone(num) {
    return num + 1
}

// yahan hamne function ko variable mein declare kara hai

// addTwo(5)  // error kyunki ye kahe ga ki cannot declare befor initilization
// here the concept of Hoisting comes into picture

const addTwo = function(num){ // also called expression
    return num + 2
}

addTwo(5)
