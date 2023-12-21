const accountId = 144553; //the value cannot be change

//declaration of variables let/var the difference is in between the scope
/*
Prefer not ot use var because of issue in block and functional scope
*/

let accountEmail = "hee@gmail.com"; // scope problem is removed
var accountPassword = "12345";
accountCity = "Jaipur"; //possible but never use this

let accountState; // if it not initialized so it is undefined

// accountId = 2;  // not allowed
accountEmail = "rev@gmail.com";
accountPassword = "aa";
accountCity = "Chennai";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
