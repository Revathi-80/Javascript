const name = "revathi";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// //string interpolation
// console.log(`Hello my name is ${name} . welcom to Hello world`)

const gameName = new String("RevAthi-p");
console.log(gameName); //key-value pair

//length
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newGameName = gameName.substring(0, 4);
console.log(newGameName);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  revathi     ";
console.log(newStringOne.trim());

const url = "https://revathi.com/revathi%20P";

console.log(url.replace("%20", "-"));

console.log(url.includes("vat"));

const myName = new String("revathi-j-p-com");

console.log(myName.split("-")); //[ 'revathi', 'j', 'p', 'com' ]
