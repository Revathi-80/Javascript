function sayMyName() {
  console.log("r");
  console.log("e");
  console.log("v");
  console.log("a");
}

// sayMyName //reference
// sayMyName(); //execution

function addTwoNumbers(a, b) {
  // parameters -> function defination
  console.log(a + b);
}

// addTwoNumbers(3, 4);  //7    // arguments -> function call
// addTwoNumbers(3, "4"); //34
// addTwoNumbers(3, "a"); //3a

function addTwoNumbers2(a, b) {
  return a + b;
}

const result = addTwoNumbers2(3, 4);
// console.log(result);

function loginUserMsg(username) {
  return `Hello ${username}!Just logged In.`;
}
// const msg = loginUserMsg("revathi");
// console.log(msg);
// console.log(loginUserMsg()); //Hello undefined!Just logged In.

function loginUserMsg1(username) {
  if (!username) {
    return `Please enter a username`;
  }
  return `Hello ${username}!Just logged In.`;
}
// console.log(loginUserMsg1()); //Please enter a username

function loginUserMsg2(username = "sam") {
  //default value
  return `Hello ${username}!Just logged In.`;
}

//Cart
//rest operator

function calculateCartPrice1(...num1) {
  return num1;
}

// console.log(calculateCartPrice1(200, 300, 400)); //[ 200, 300, 400 ]

function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice2(200, 300, 400, 500, 1000)); //[ 400, 500, 1000 ]

const user = {
  username: "revathi",
  price: "33",
};

function handleObject(anyobject) {
  console.log(
    `User name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
// handleObject({
//   username: "revathi",
//   price: "33",
// });

const myNewArr = [200, 300, 4000, 444];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArr));
