const gamename = new String('freefire-singapur-india');
const slicestring = gamename.slice(-7, 3);
// console.log(slicestring);
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'))
console.log(gamename.split('-'));