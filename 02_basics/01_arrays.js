// array

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4,)

// console.log(myArr[0]);
// console.log(myArr2.join(', '));

// ############################# Array Methods #################################################

// myArr.push(6)
// myArr.pop()

// myArr.unshift(6) // add on start index
// myArr.shift() // delete the start index

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5))

// const newArray = myArr.join()
// console.log(newArray);
// console.log(typeof newArray);

// console.log(myArr);

// ############################# SLICE & SPLICE ###########################################

// SLICE: Returns the copy of section of an array, will not change the original array
console.log("A ", myArr);
const myn1 = myArr.slice(1, 4)

console.log(myn1);
console.log("B ", myArr);


// SPLICE: Extracts the elements from the original array & make it another array
// original array will be changed
const myn2 = myArr.splice(1, 4)

console.log("C ", myArr);
console.log(myn2);
