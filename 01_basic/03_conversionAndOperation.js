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

//"33" =>number
//"33abc" =>value -> NaN   typeof ->number
// true - 1  false -0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true  0 -> false
//"" -> false  "revathi" -> true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
