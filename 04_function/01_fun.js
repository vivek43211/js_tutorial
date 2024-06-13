function saymyname() {

    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");
}
// saymyname()

function addition(num1,num2) {
    // console.log(num1+num2)
    let add_num = num1 +num2;
    return add_num;
    
}
// addition(2,9)
let add_num = addition(4,7);
// console.log(add_num)

function userlooged(name = "sam") {
    return `${name} just looged in system` 

}
// console.log(userlooged("rahul"));

const user = {
    username : "vivek",
     price : 234
}
function handleobject (anyobject){
    return `${anyobject.username} is my username and price is ${anyobject.price}`
}
// console.log(handleobject(user));
console.log(handleobject({
    username : "sam",
    price : 23222
}))

const array = [200,400,600,800]
function returnsecondarr(getarray) {
    return getarray[2]
    
}
console.log(returnsecondarr(array));