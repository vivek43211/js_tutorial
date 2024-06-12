// let name = "hello "
// let name2 = 50
// // console.log(name + name2)
// // interplotation
//  console.log(`${name} world i am here again ${name2}`)

 const gamename = new String('Ramesh ')
 console.log(gamename)
 console.log(gamename[5])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('h'))

let getstring = gamename.substring(0,3)
console.log(getstring)
// substring doesn't allow negative value but slice does

let anotherstring = gamename.slice(0,3) //(-5,3)
console.log(anotherstring)

let str1 = "   hello.  "
console.log(str1.trim())


let url = "https.//google.com//20%"
console.log(url.replace('20%','in'))
console.log(url.includes('google')); // it retuen boolean to check give string present or not

console.log(url.split('//'));