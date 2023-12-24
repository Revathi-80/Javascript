//var -> global scope
//let and const  block scope

var c = 300;
let a = 100;
if (true) {
  //block scope
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   console.log("inner ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "revathi";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); ////not accessible
  two(); // different call stack is created
}

// one();

if (true) {
  const username = "revathi";
  if (true) {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);  //not accessible
}

// console.log(username); //not accessible

//************************************HOISTING***************************************************/
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

//expression
// console.log(addTwo(5)); //cant access
const addTwo = function (num) {
  return num + 2;
};
