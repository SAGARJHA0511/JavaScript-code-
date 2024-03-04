let score = '33abc';
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log( valueInNumber);
 


    //   To convert into Boolean 
let loggedIn = 0
let boolen = Boolean(loggedIn)
// console.log(boolen);

// when we 1 => output is true 
//  when we add 0 => output is false 
//  "" empty string => false 
// "Hello"   => true 

//  to convert into string 
let numberOfValue = 23 ;
let string = String(numberOfValue)
// console.log(string);
// console.log(typeof string)
//  In console  23 is string, but we have to check typeof ?

let x = new Number("3") // as (new) keyword creates a new object and pushes 3 into that object.
let y = Number ("4")    // in case of y it will converted string into number 
console.log(typeof x);
console.log(typeof y);