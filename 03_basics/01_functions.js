function addTwoNumber(number1,number2){
    // console.log(number1+number2)
    return number1+number2
}
const result=addTwoNumber(3,4)
// console.log("result: ",result)

function Loginmessage(name){
    if(name===undefined){
        return `give valid name`
    }
    return `${name} logged in`
}
console.log(Loginmessage())