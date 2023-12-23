let score = 33;
let score1 = "33abc";

let temp = null;
console.log(typeof score);
console.log(typeof score1);

let valueInNumber = Number(score1);
let tempInNumber = Number(temp);

console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN
console.log(tempInNumber); //0

// //"33" =>number
// //"33abc" =>value -> NaN   typeof ->number
// // true - 1  false -0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// // 1 -> true  0 -> false
// //"" -> false  "revathi" -> true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);

/*********************************Operations*******************************/

// The reason is that an equality check == and comparisons > < >= <= works differently
// Comparisons convert null to a number, treating it as 0
// that's why (3) null>= 0 true  and (1) null >0 is false
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false

//strict comparisons  ===
console.log("2" === 2);
