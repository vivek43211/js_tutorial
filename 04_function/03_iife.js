// immediately Invoked function Expression
// used to dtop the function scope to get pollute from global variable 

(function chai() {
    console.log(`DB conneted `)
    
})();

( (name) =>{
    console.log(`Db connetd by ${name}`);
})('vivek')
