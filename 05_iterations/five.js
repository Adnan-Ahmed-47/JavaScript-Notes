// Arrays ke liye ham aksar forEach loop lagate hain

const coding = ["js", "ruby", "java", "python", "cpp"]

// Call back function ka naam nahi hota

// Call back function using simple func
// coding.forEach( function (item) {
//     console.log(item);
// })

// Call back function using arrow func
// coding.forEach( (val) => {
//     console.log(val);
// })

function printMe(item){  // ham is function ko bhi forEach mein paas kara sakte hain
    console.log(item);
}

// coding.forEach(printMe)


// --------------------------------------------------------------------------
// forEach ke paas sirf ek parameter nahi hota balke 3 hote hain

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// --------------------------------------------------------------------------
const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'js'
    },
    {
        languageName: 'java',
        languageFile: 'java'
    },
    {
        languageName: 'python',
        languageFile: 'py'
    },

]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})