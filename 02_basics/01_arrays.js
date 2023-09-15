const myarr = new Array(1, 2, 3, 4,5);
myarr.push(4);
myarr.pop()
// myarr.unshift(1)
// console.log(myarr);
const newarr = myarr.join();
// console.log(newarr);
console.log("A ",myarr)
const myn1 = myarr.slice(1, 3);
console.log(myn1)
console.log("B ", myarr)
const myn2 = myarr.splice(1, 3)
console.log("C ",myarr);
console.log(myn2);