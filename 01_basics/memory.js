let myname = "rahul"//stack memory
let yourname = myname;
yourname = "kab"
// console.log(myname);
// console.log(yourname);
let userOne = {
    name: "rahul",
    email:"rahulmaity@gmail.com"
}
let userTwo = userOne;//give reference
userTwo.email = "kab@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);