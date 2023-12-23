// const score = 400;

// const balance = new Number(400);

// console.log(balance); //[Number: 400]
// console.log(score); //400

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //400.00

// const num1 = 23.89666;
// console.log(num1.toPrecision(3)); //returns a string

// const num2 = 1000000;
// console.log(num2.toLocaleString("en-IN")); // indian standards , default is US standard

//*********************MATHS************************/

// console.log(Math);
// console.log(Math.abs(-5));   //5
// console.log(Math.round(4.6));  //5
// console.log(Math.ceil(4.2));  //5
// console.log(Math.floor(4.9)); //4

console.log(Math.random()); //[0-1]
console.log(Math.floor(Math.random() * 10) + 1); //[1-9]

//
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
