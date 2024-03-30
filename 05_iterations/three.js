// ["", "", ""]
// [{}, {}, {}]

// for of 
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    if(greet == " "){
        continue
    }
    // console.log(greet);
}
// ----------------------------------------------------------------------------------------------------------
// Maps : it is an object in itself --> Map(0){}
// iski values unique hoti hain aur ham ise jis order mein store karte hain woh usi value mein store hoti hain
// Maps iteratable nahi hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   // ye value nahi ayegi
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// ------------------------------------------------------------------
// object ko forof se iterate nahi kar sakte 
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);
// }




