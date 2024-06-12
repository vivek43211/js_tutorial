let marvel1 = ["thor","iron man","spiderman"]
let dc_hero = ["superman","batman","flash"]

marvel1.push(dc_hero)
// console.log(marvel1)
// console.log(marvel1[3][1]);

let all_heros = marvel1.concat(dc_hero)
// console.log(all_heros)

//separate
let all_new = [...marvel1,...dc_hero]
// console.log(all_new)

let arr2 = [2,3,4,5,[12,45,2],4,9,[2,2,[5,8]],0]
// console.log(arr2.flat(Infinity));

// we can convert any object string in array
// console.log(Array.isArray("vivek"));
// console.log(Array.from("hello!!"))
// console.log(Array.from({name : "vivek"}));
// it will return empty barcket until we assign value or key

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));