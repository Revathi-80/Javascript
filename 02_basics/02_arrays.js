const myHeros = ["thor", "spiderman", "ironman"];
const dc = ["superman", "flash", "batman"];

// myHeros.push(dc);

// console.log(myHeros); //[ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]

// const arr1 = myHeros.concat(dc);
// console.log(arr1);

const allHeros = [...myHeros, ...dc]; //spread operator
// console.log(allHeros);

const newArr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const newArr2 = newArr1.flat(Infinity);
// console.log(newArr2);

// console.log(Array.isArray("revathi"));  //false
// console.log(Array.from("revathi")); //[  'r', 'e', 'v', 'a', 't', 'h','i' ]
// console.log(Array.from({ name: "revathi" })); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
