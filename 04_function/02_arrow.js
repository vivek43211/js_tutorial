const user ={
    username : "Vivek",
    price : 123 ,
    welcomemessage : function () {
        console.log(`${this.username},welcome to website`);  
        console.log(this) 
    }
} 

// user.welcomemessage();
// user.username = "sam"
// user.welcomemessage();
// console.log(this)

// function oyee(){
//     let username = "vivek"
//     console.log(this.username)
// }
// oyee() 



// arrow
// const add_two = (num1,num2) => {
//     return num1+num2
// }

// const add_two = (num1,num2) =>  num1+num2
// const add_two = (num1,num2) => (num1*num2)
const add_two = (num1,num2) => ({username :"vivek"})
console.log(add_two(3,6))



