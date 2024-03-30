const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// ############################# Array Methods #################################################

// PUSH: uses existing array to make changes
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// CONCAT: gives new array after concat
// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// SPREAD OPERATOR
let all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// NOTE: above r the 3 methods to join or concat an array 


// If u r stuck in array under array under array etc then we use
const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = new_array.flat(Infinity)
// console.log(new_array);
// console.log(real_array);

// -----------------------------------------------------------------------------
// Data Scraping : agar aap data select karte hain kisi webpage se toh woh data alag format mein aata hai i.e, Nodelist, object, ya phir string mein aata hai 
// lekin hame data chahiye array ke format mein taaki ham loop kar sake 

// console.log(Array.isArray('Adnan'));
// console.log(Array.from('Adnan'));  // make it an array
// console.log(Array.from({name: 'Adnan'})); // gives an empty array u need to tell key or value



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));