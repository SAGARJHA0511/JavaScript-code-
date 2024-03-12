// Numbers methods 

const num = 100 ;
console.log(num)

// for surerty 
const num1 = new Number(200);
console.log(num1);

// convert into number to string 
console.log(num1.toString()) // it will show number its a string 

// to check it is a string or not 
console.log(num1.toString().length); 

// checking indexOf 

let no = String (5654)
summ = no.indexOf(4)
console.log(summ);

// toFixed    // how much value to after Decimal 
const dot = 123.345
console.log(dot.toFixed(2)); // output => 123.34
console.log(dot.toFixed(1)); // output => 123.3

// toPrecision   // to give accuracy of number 
const pre = 123.4534554
console.log(pre.toPrecision(4));//  output => 123.5

// tolocaleString 
const locale= 100000000
console.log(locale.toLocaleString('en-IN')); // output - 10,00,00,000


