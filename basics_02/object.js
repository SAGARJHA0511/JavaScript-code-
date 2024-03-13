// There are 3 ways to create object 
// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword) 

// Object literal 

let person = {
    name : 'Nagdiv',
    age : 34,
    salary : 45000,
    location : ["Bangolore", "Noida", "USA"],
    greet : function(){
        console.log("hello ! welcome to my profile");
    }
    

}
console.log(typeof person);
//accessing the object value 
console.log(person.name);;
console.log(person.age);
console.log(person.location[0]);
console.log(person.greet());

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