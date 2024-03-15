// object is non-primitive data-type that allows to store multiple collections of data.
/* 
=> group of key values pairs as one entity.
=> group of properties (properties name & properties value pairs) as one entity.
=> group of data and functionality as one entity.
=> duplicates keys/properties name are not allowed.
*/ 

// The syntax to declare an object 

const ObjectName = {
    key1 : "value1",
    key2 : "value2",

};
console.log(ObjectName);
console.log(ObjectName.key1)

const Employee = {
    name : "deep patil",
    Salary : 33000    
//  [key]    [value]

};
console.log(Employee);
console.log(Employee["name"]); // using bracket notation 
console.log(Employee["Salary"]);

// In javascript "key : value" pairs are called properties 

// 