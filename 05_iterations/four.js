// Objects ke andar loop lagana hai toh ham forin loop lagayenge
// Arrays ke andar loop lagana hai toh ham forof loop lagayenge

// Objects pe loop kaise lagaye  (for in loop)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby', 
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// -------------------------------------------------------------------
// Array ke saath forin loop lagane par 

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(key);// isse hame sirf index deta hai key ki shakal mein
    // console.log(programming[key]); // ye hame values deta hai
}

// -------------------------------------------------------------------
// map is not iterable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// for (const [key, value] in map) {
//     console.log(key, value);
// }