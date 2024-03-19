console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Reason is that an equality check == and comparisons > < >= <= works differently.

// Comparisons convert null to number, treating it as 0 Thats why (null >= 0) is true (null > 0) is fales  

console.log(undefined > 0);
console.log(undefined == 0); // confusion clean code only 
console.log(undefined >= 0);

// Ternary Operator 

// let age1 = 18;
// let warning1= age < 12  ? "you are eligible" : "you are not eligible";
// console.log(warning1);
  

let age = 18 
let warning;

if (age>19 ){
     warning =   "you are not eligible"
}else {
    warning = "you are eligible"
};
 console.log(warning );