//singleton = it's only deifne if we use constructor

//literals = object define by literals then it can't refer to singleton

let mysym = Symbol("key");

const user ={
    "name" : "vivek",
    [mysym] : "mykeyss",
    age: 20,
    location : "bhilwara",
    email : "Vivek@233.google.com",
    Isloggedin : false ,
    time : ["monday","sunday"]

}
// console.log(user["name"]);
// console.log(user["age"])
// console.log( user[mysym]);

user.age = 34;
// Object.freeze(user) // it will lock the object and no further changes is assign
user.age = 67;
// console.log(user);

//function in object
user.greeting = function () {
    console.log("hello user this is me!!")
}
user.greeting2 = function () {
    console.log(`hello user this is me!!,  ${this.name},\nmy age is ${this.age}`) // this refer to context where peice of code is
}

console.log(user.greeting());
console.log(user.greeting2());