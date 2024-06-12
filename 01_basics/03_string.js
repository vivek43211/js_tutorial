// let value = 3;
// let negvalue = -value;
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2%2)
// console.log(2/2)
// console.log(2**3)
// console.log(2*2)
// let str1 = "hello"
// let str2 = " world!!"
// let str3 = str1 +str2
// console.log(str3)

//string to number
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"1")


// comparsion of datatype
// console.log(2>1)
// console.log(2 >= 2)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)

// console.log("2" == 1)
// console.log("2" > 1)
// console.log("2" < 1)

// //=== it check both data type
// console.log("2" === 1)

// console.log(null >0)
// console.log(null == 0 )
// console.log(null >=0)

// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined > 0)



/// memorys
// stack(prmitive)= copy value
//heap(non-primtive)= only you got references
let myname = "userrrrr"
let mynamecorrect = myname

mynamecorrect = "user"
console.log(mynamecorrect)
console.log(myname)


let obj = {
    email : "user@email.com",
    city : "jaipur"
}

let obj2 = obj;
obj2.email="vivek@gamil.com"
console.log(obj2)
console.log(obj)
