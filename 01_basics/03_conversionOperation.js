let score = 33; 

console.log(typeof score);
//number

let score2 = "33"; 
console.log(typeof score2);
//string


//But 
let score3 = "33abs";
let finalScore = Number(score3); //conversion string into number 

console.log(typeof finalScore);
//NaN => Special type


//"33" => 33
//"33abs" => NaN
// true => 1, false => 0 

// Conversion in boolean
// 1=> true , 0 => false
// "" => false;
// "Sammy" => true;



// String conversion

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(typeof stringNumber);
//String
