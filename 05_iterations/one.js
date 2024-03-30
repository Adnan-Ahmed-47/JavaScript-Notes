// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if(element == 5){
        // console.log("5 is the best number");
    }else{
        // console.log(element);
    }  
}


// Nesting loops

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    // console.log(`\n${i} table`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and Outer loop ${i}`);
        const result = i * j
        // console.log(`${i} * ${j} = ${result} `);
    }  
}


let myArray = ['flash', 'batman', 'superman']
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// ---------------------------------------------------------------------------------------------
//  break & continue
// break poora loop se hi bahar aajata hai 
// continue khali woh particular selected value ko loop se bahar nikal deta hai

// break
// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log("5 Detected");
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }

// continue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        // console.log(`${i} is my best value from all the other numbers`);
        console.log(`${i} Detected`);
        continue 
    }
    console.log(`Value of i is ${i}`);
}