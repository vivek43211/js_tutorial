// let sc  = 100;
// console.log(sc);
// console.log(typeof sc)
let balance = new Number(100);
// console.log(balance)

// console.log(balance.toString().length);
// number to string by this we can use string function too
// console.log(balance.toFixed(3)); 
// used to covert number woth the specified number of decimal places
// console.log(typeof balance)

// const sc1 = 1123.859
// console.log(sc1.toPrecision(3));
// format a number to specified length

const hundred = 1000000000
// console.log(hundred.toLocaleString("en-IN"));


//+++++++maths++++++++++
// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(5.6));
// console.log(Math.min(4,5,6,1,2,3));
// console.log(Math.max(5,6,3,2,8,9.9,12,55,4,4,3));


console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.round(Math.random()*10 )+1 );

 
const max =20;
const min = 10;
console.log(Math.floor(Math.random()*(max-min+1))+min)