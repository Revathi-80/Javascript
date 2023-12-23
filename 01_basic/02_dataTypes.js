"use strict"; // treat all JS code as newer version

// alert("Hello"); //cannot be used in nodejs can use in browser

let age = 18;
let isLogged = false;
let state = null;

// primitives

//number [2^52]
//bigint
//string = ""
//boolean
//null => standline value
//undefined
//symbol =>unique

// // objects

// console.log(typeof "revathi");
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// //symbol

// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId); //false

//primitive and non primitive
// differenced by how data is stored in memeory and it is accessed
//Javscript s dynamically typed

// -----------------------------------------------------------------------------------------------------

// primitive (call by value) (copy)
//7 -> String,Number , boolean, Null, undefined, Symbol (to make the value unique), BigInt
// tyeof BigInt-> undefined

// -------------------------------------------------------------------------------------------------------

//non- primitive / reference type (call by reference)
//Array, Objects, Functions -> type -> Object function

// //array
// const heros = ["shaktiman", "naagraj", "doga"];
// //object
// let myObj = {
//   name: "revathi",
//   age: 12,
// };
// //function
// const myFunction = function () {
//   console.log("Hello World");
// };

//********************************************Memory******************* */

//Stack (primitive)
// 1) it gives a copy

//, Heap (Non -primitive)
//1) it gives reference

let Firstname = "Revathi";
let anotherName = Firstname;
anotherName = "P";

console.log(Firstname); // revathi
console.log(anotherName); //p

let user1 = {
  email: "user@gmail.com",
  upi: "122121",
};

let user2 = user1;
user2.email = "reavth@gmail.com";

console.log(user1); ///{ email: 'reavth@gmail.com', upi: '122121' }
console.log(user2); //{ email: 'reavth@gmail.com', upi: '122121' }
