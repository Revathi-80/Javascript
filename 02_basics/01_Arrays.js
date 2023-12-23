const myArr = [1, 2, 3, 4, 5];
const myHeros = ["shakitiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 3);

// console.log(myArr[3]);

// myArr.push(6);
// myArr.push(7); //add at end
// myArr.pop();

// myArr.unshift(0); //add it begining
// // myArr.shift();  //removes from front

// console.log(myArr.includes(3)); //true

// console.log(myArr.indexOf(9)); //-1

// const newArr = myArr.join(); //returns a string

// console.log(myArr);
// console.log(newArr);

// Slice and aplice

console.log("A ", myArr);

const myArn1 = myArr.slice(1, 3); // print from start till end-1, does not manipulate the array

console.log(myArn1); //[ 2, 3 ]
console.log("B ", myArr); //B  [ 1, 2, 3, 4, 5 ]

const myArn2 = myArr.splice(1, 3); // remove element from an array and return the deleted element
console.log(myArn2); // [ 2, 3, 4 ]
console.log("C ", myArr); //C  [ 1, 5 ]
