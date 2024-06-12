//array is collection of mutliple data item of different data type
let myarr = [1,3,4,1,67,8]
let anotherarr= new Array(3,5,17,"banana",true)
// console.log(myarr)
// console.log(myarr.length);

//arrays methods
// myarr.push(5);
// myarr.push(7);
// myarr.pop();

// myarr.unshift(9);
// myarr.shift();
// console.log(myarr.includes(4));
// console.log(myarr.includes(56));
// console.log(myarr.indexOf(1))

// let arr2 = myarr.join();
// console.log(myarr)
// console.log(arr2);

console.log("A",myarr);

//slice = it can't modilifes orignal data
let myn1 = myarr.slice(2,5)
console.log(myn1)
console.log("B",myarr)

//splice
let myn2 = myarr.splice(2,5)
// it manipluate the orginal data and return or delete the element from the orginal data
console.log(myn2)
console.log("C",myarr)
