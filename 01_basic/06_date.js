// represented in milliseconds

let myDate = new Date();

// console.log(myDate); //2023-12-23T11:40:54.458Z
// console.log(myDate.toString()); //Sat Dec 23 2023 11:41:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sat Dec 23 2023
// console.log(myDate.toISOString()); //2023-12-23T11:43:01.215Z
// console.log(myDate.toJSON()); // 2023-12-23T11:43:01.215Z
// console.log(myDate.toLocaleString()); // 12/23/2023, 11:43:01 AM

let myCreate = new Date(2023, 0, 23);
// console.log(myCreate.toDateString());
let myCreate1 = new Date("2023-01-14");
let myCreate2 = new Date("01-14-2023");

// console.log(myCreate1.toLocaleString()); //1/14/2023, 12:00:00 AM
// console.log(myCreate2.toLocaleString()); //1/14/2023, 12:00:00 AM

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreate.getTime());

let newDate = new Date();
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
