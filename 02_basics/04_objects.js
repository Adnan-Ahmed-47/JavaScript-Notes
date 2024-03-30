const tinderUser = new Object()   // singleton object
// const tinderUser = {}             // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// bhot interesting hai isme aapku saare keys array mein store hote hain 
// jo ki aap loop laga sakte hain

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // less usage

// ham ise puch sakte hain ki ye particular object mein ye particular value hai ya nahi
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ----------------------------------------------------------------------
// Object inside an object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "adnan",
            lastname: "ahmed"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

// ----------------------------------------------------------------------------------------
// Combining or Merging an objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = { obj1, obj2} //problematic
// const obj3 = Object.assign(obj1, obj2) 
// const obj3 = Object.assign({}, obj1, obj2) // can also use {} parameter so that it is stored in that particular object

// best practice --> Spread operator
const obj3 = {...obj1, ...obj2}

// console.log(obj1);
// console.log(obj3);


// ----------------------------------------------------------------------------------------
// OBJECT DESTRUCTURING

const course = {
    coursename: "js in hindi",
    price: "999", 
    courseInstructor: "hitesh"
}

// course.courseInstructor  // not a best practice to call it 3 times then type 3 lines of code

// const {courseInstructor} = course
// console.log(courseInstructor);   // agar value bhot badi hai print karne toh

const {courseInstructor: instructor} = course // usai naam dedo as instructor then call it
console.log(instructor);   