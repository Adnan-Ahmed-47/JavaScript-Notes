// 2 ways to declare an object 

// 1) singleton(only one object) --> by using constructor
    // Object.create

// 2) object literals(multiple instances will be created)

    const mySym = Symbol("key1")

    const jsUser = {
        name: "Adnan",
        "full name": "Adnan Ahmed",
        // mySym: "mykey1",  // wrong way
        [mySym]: "mykey1",  // correct way
        age: 22,
        location: "Hyderabad", 
        email: "adnan@google.com",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Saturday"]
    }
// ----------------------------------------------------------------------

    // 2 ways to access an object

    // 1) 
    // console.log(jsUser.email);
    
    // 2) 
    // console.log(jsUser["email"]); // Best practice to access
    // console.log(jsUser["full name"]);
    // console.log(jsUser[mySym]);
// ----------------------------------------------------------------------

    // Changing the object values
    jsUser.email = "adnan@chatgpt.com"
    // Object.freeze(jsUser)  // Now u cannot change ur object as it has been locked
    
    jsUser.email = "adnan@microsoft.com"
    // console.log(jsUser);
// ----------------------------------------------------------------------

    // Adding function to an Object
    jsUser.greeting = function(){
        console.log("Hello JS users");
    }
    jsUser.greetingTwo = function(){
        console.log(`Hello JS user, ${this.name}`); // we use this to tell that particular object
    }

    // console.log(jsUser.greeting);
    console.log(jsUser.greeting());
    console.log(jsUser.greetingTwo());


