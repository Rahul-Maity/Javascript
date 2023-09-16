const tinderUser = new Object()
tinderUser.id="1352"
tinderUser.name="Rahul"
tinderUser.isLoggedin=true
const regularUser = {
    email: "rahul@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Rahul",
            lastname:"Maity"
        }
    }
}

console.log(regularUser.fullname.userFullname.lastname);
const obj1={1:"a",3:"c"}
const obj2={2:"b",4:"d"}
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedin'));