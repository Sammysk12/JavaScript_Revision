//Variable names should be easy, unique and readable (means by reading it we should understand why the variable is created)

const accountId = 1432234;
//If once initialized then value cannot be changed. Block Scope

let accountEmail = "samk@gmail.com";
//If once initialized then value can be changed (Changable). Block Scope

var accountPassoword = "123456";
//If once initialized then value can be changed (Changable). Global Scope
//Not good for programming

/*
Do not use var in programming bcoz of issue in block scope and functional scope

*/


accountCity = "Solapur"
//This also not good.

console.table([accountEmail, accountPassoword,accountCity])

