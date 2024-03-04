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
// console.log(typeof x);
// console.log(typeof y);


// operation 

let str1 = "hello"
let str2 = " world"

let add = str1 + str2
// console.log(add);

// console.log("1" + 2  + 2); // If the string is first then all the string are included into string   output =>  122
// console.log(1 + 2 + "2");  // If the string is in last conversion will be like this 1 + 2 = 3  and "2"  output => 32     https://262.ecma-international.org/12.0/#sec-abstract-operations
// console.log(1 + "2" + 2 );

// console.log( + true ); 
// console.log( +"")

let num1, num2, num3 

num1 = num2 = num3 = 2+2 
// console.table([num1,num2,num3]);

let num11, num22, num33;     // Proper way 
num11 = num22 = num33 = 4;
// console.table([num11, num22, num33]);


let count = 100 
count ++
// ++count 
// console.log(count );
 
let a = 5 ;  
++a   // prefix 
a++   // postfix 
console.log(a);
