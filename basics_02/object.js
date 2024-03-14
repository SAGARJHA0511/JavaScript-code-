// There are 3 ways to create object 
// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword) 




// Object literal 

// How to define symbol in object 
const mySim = Symbol("newsymbol")

let person = {
    name : 'Nagdiv',
    [mySim] : "newsymbol",  // How to add in object to symbol // syntax is like this [mysim]
    "full Name" : "Nagdiv Kumar",
    email_ID : "nagdiv@gmail.com",

    age : 34,
    salary : 45000,
    location : ["Bangolore", "Noida", "USA"],
    greet : function(){
        return "hello! welcome to my profile";
    }
    

}
console.log(typeof person);
//accessing the object value 
console.log(person.name);
console.log(person["full Name"]); // this is best way to access any value beacuse [ key name = behind it store as string ] 
console.log(person.age);
console.log(person.location[0]);
console.log(person.greet());
console.log(typeof person[mySim]);  // to access symbol 
// console.log(person.email_ID); 
console.log(person.email_ID = "nagdiv_kumar@gmail.com"); // to change value you can use only equal to =  
Object.freeze(person)  // freeze is used for lock the values that nobody can change the object.
console.log(person.email_ID = "nagddddddd@gmail.com");
console.log(person);





// constructor 

function Employee(){
    this.name = "gama";
    this.salary = 45000;

}
let emp = new Employee();
console.log(typeof emp);
console.log(emp);
//accessing the object value 
console.log(emp.name,emp.salary);
console.log(emp.name);
console.log(emp.salary);

const office = {
    name : "shiva",
    email : "shiva123@gmail.com",
    location : "bangolore",
    age : 34,
    logIn : false,
    logIn_days : ["Monday", "Tuesday", "wednesday"],


}
console.log(office.name);  
console.log(office.age);
console.log(office.location);
console.log(office.logIn);
console.log(office.logIn_days[1]);