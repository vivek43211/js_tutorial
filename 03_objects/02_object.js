// const tinderuser = new Object(); // singleton object
const tinderuser = {} // non-singleton object

tinderuser.id="1234"
tinderuser.name = "samyyy"
tinderuser.address = "user@name.com"
// console.log(tinderuser);
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const nestedobj = {
        email : "here@google.com",
        name:{
            fullname:{
                firstname:"vivek",
                lastname:"vyas"
            }
        }
}
// console.log(nestedobj.name.fullname.lastname);
 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e"}
const all_obj= Object.assign(obj1,obj2) // obj1 is target and obj2 is source
// console.log(all_obj);
// console.log(obj1);
// onj1 is target so all the obj2 is copy into obj1 and modifies it's data
const all_obj1 = Object.assign({},obj1,obj2,obj3) // here {} became target and obj1 obj2 obj3 became source
// console.log(all_obj1);
// console.log(obj1);

//destructing in objects
const cousre = {
    cousrename : "js from youtube",
    name : "vivek",
    date : 23
}
// console.log(cousre.date)
// const {cousrename} = cousre
const {cousrename : cn} = cousre 
console.log(cn);


// api json
// {
//     "name" : "vivek" ,
//     "cousrename" : "hello",
//     "price" : "free",
// }
[
    {},
    {},
    {}
]