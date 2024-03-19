// To store data in variables 

//  There are 2 types of data types 
//  - Primitive data type           and                   Non-primitive data type 
//    "Hello"       --- String                            ["hello"]      ---- Array
//     25           --- Number                            {       }       ---- Object 
//    Ture or Fales  --- Boolen                           represent reguler 
//    Var x;         --- Undefined                        Expression         ----- RegExp
//    Null           --- Null(No Value at all)
//    12345678909292 ---- Bigint
//    Symbol         ---  $(Uniqness)

// console.log(typeof undefined); //undefined
// console.log(typeof null); // Object 


// const size = [28,32,36]
// console.log(typeof size);   // when you use typeof on an array, it simply tells you that it's an object

// const age = [13, 15, 34, 43];   // If you want to specifically check if a variable is an array, you can use the Array.isArray() method
// console.log(Array.isArray(age));  // output will true 
   

let growth;
growth = "string "
growth = 100 

// console.log(growth);

// Summary 

// Primitive Datatype 

//Number 
const userNumber = 4 
const nextNumber = 5.6 
// String 
const thisString = "data"
// Null
const weatherTem = null;
// Undifined 
let emailId = undefined;
emailId;
// Boolean 
let correctId = true ;
worngtId = false ;
// Symbol 
const passWord1 = Symbol('123');  // Value are same, in engin it creates unique identifiers  
const password = Symbol("123")
console.log(passWord1==password);
//BigInt 
 const largeIntger = BigInt("123456789098765432");
 console.log(largeIntger);


 // Non - primitive 

// Array          // Array is data type used to store multiple values in a single variable
let myArray = [1, 'two', true, { name: 'John', age: 30 }, [4, 5, 6]];
console.log(myArray);

// Object    //  an object is a complex data type that represents a collection of key-value pairs

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// console.log(person.name); // Output: 'John'
// console.log(person.age); // Output: 30
// console.log(person.city); // Output: 'New York'

// Function 

const myFunction = function() {
    console.log("Hi");
}
myFunction();

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

    /*
    /datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
*/