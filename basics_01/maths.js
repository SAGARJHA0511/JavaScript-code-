// math methods to preform mathematical operation

// Absolute method 
console.log(Math.abs(-5));// gives absolute value // Output => 5 

// Round method 
console.log(Math.round(3.6)); // round a number to the nearest integer // output => 4

//ceil method 
console.log(Math.ceil(4.1)) // rounds up to the nearest number // output => 5

// floor method 
console.log(Math.floor(4.9)); // rounds a number down to the nearest integer // Output => 4

// square method 
console.log(Math.sqrt(9)); // returns the square root of a number  // Output => 3

// pow method 
console.log(Math.pow(2,3)); // returns the base to the exponent power, that is base^exponent eg- 2^3 2*2*2 = 8 // Output => 8


// random method 
let min = 1;
max = 6;
console.log(Math.floor(Math.random()*(max-min + 1))+ min); // to get value between 1 to 6 
//
console.log(Math.random()); // gives value between 0 and 1 ===> like this 0.1234 or 0.65432
console.log(Math.random()*10)  // This expression will generate random floating-point numbers between 0 (inclusive) and 10 (exclusive), effectively
console.log(Math.random()*10 + 1) //When we add +1 to the expression, This means the range becomes [1, 11) instead of [0, 10)  ==> To avoid 0 
