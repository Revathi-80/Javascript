//this -> current context
const user = {
  username: "revathi",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); //give current context
  },
};

// user.welcomeMessage(); //revathi, welcome to website
// user.username = "sam";
// user.welcomeMessage(); //sam, welcome to website
console.log(this); //{}

function chai() {
  let username = "revathi";
  console.log(this.username); // this does not work in functions
}
chai();
