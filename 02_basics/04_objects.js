//constructor - singleton

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "revathi",
      lastName: "p",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

// optional Chaining  ?.

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({},obj1,obj2)  // preferred way to write
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//
const obj5 = { ...obj1, ...obj2 };
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const users = [
//     {
//         id:1,
//         email:"rev@gmail.com"
//     },
//     {
//         id:2,
//         email:"rev2@gmail.com"
//     },
//     {
//         id:3,
//         email:"rev3@gmail.com"
//     },
//     {
//         id:4,
//         email:"rev4@gmail.com"
//     }
// ]
// users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //return type is an array
console.log(Object.values(tinderUser)); //return type is an array
console.log(Object.entries(tinderUser)); //return type is an array of array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
