// constructor - singleton
//  Object.create

// declaring as literals - not a singleton
//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "revathi",
  //   mySym: "key1", //not valid way to add symbol
  [mySym]: "key1",
  "full name": "revathi p",
  age: 18,
  location: "chennai",
  email: "revatgi@gmail.com",
  lastLoginDays: ["monday", "friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "revathi@gpt.com";
// Object.freeze(JsUser); // further changes on JsUser will not be made
JsUser.email = "revathi@microsoft.com";
// console.log(JsUser);
// {
//     name: 'revathi',
//     'full name': 'revathi p',
//     age: 18,
//     location: 'chennai',
//     email: 'revathi@gpt.com',
//     lastLoginDays: [ 'monday', 'friday' ],
//     [Symbol(key1)]: 'key1'
//   }

JsUser.greeting = function () {
  console.log("Hello Js Users");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js Users ${this.name} `);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
