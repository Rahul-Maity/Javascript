const mysym=Symbol("key1")
const jsUser = {
    name: "Rahul",
    "full name": "Rahul Maity",
    [mysym]: "key1",
    age: 18,
    location: "Jaipur",
    email: "rahul@facebook.com",
    isLoggedIn: true,
    
};
// console.log(jsUser[mysym]);
jsUser.email = "rahul@twitter.com";
// Object.freeze(jsUser);
jsUser.email = "rahul@google.com";
// console.log(jsUser);
jsUser.greeting=function(){
    console.log("Hello js user")

}
jsUser.greeting2=function(){
    console.log(`Hello js user ${this["full name"]}`)

}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());