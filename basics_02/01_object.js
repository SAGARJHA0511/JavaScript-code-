// There are 3 ways to create object 
// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword) 


/**************************************************************************************************************************************************/


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
// console.log(typeof person);
// //accessing the object value 
// console.log(person.name);
// console.log(person["full Name"]); // this is best way to access any value beacuse [ key name = behind it store as string ] 
// console.log(person.age);
// console.log(person.location[0]);
// console.log(person.greet());
// console.log(typeof person[mySim]);  // to access symbol 
// // console.log(person.email_ID); 
// console.log(person.email_ID = "nagdiv_kumar@gmail.com"); // to change value you can use only equal to =  
// // Object.freeze(person)  // freeze is used for lock the values that nobody can change the object.
// console.log(person.email_ID = "nagddddddd@gmail.com");
// console.log(person);


/*********************************************************************************************************************************************/

// Not a singleton object 
const infoUser = {}
infoUser.id = "koko123",
infoUser.name = "koko",
infoUser.isLoggedIn = false
   
// console.log(infoUser);


const reUser = {
    name : "Sagar",
    fullName : {
        userFullName : {
            firstName : "Sagar",
            lastName : "Jha"
        }
    }
}
// how to access nested object value 
// console.log(reUser.name);
// console.log(reUser.fullName.userFullName.firstName); // output => Sagar 
// console.log(reUser.fullName) // Output => { userFullName: { firstName: 'Sagar', lastName: 'Jha' } }

/**************************************************************************************************************************************************/
// Object assign 

const target = {a:1, b:2};
const source = {b:4, c:5};
const result = Object.assign({},target,source);
console.log(result);



/**************************************************************************************************************************************************/


// constructor 

function Employee(){
    this.name = "gama";
    this.salary = 45000;

}
let emp = new Employee();
// console.log(typeof emp);
// console.log(emp);
// //accessing the object value 
// console.log(emp.name,emp.salary);
// console.log(emp.name);
// console.log(emp.salary);

const office = {
    name : "shiva",
    email : "shiva123@gmail.com",
    location : "bangolore",
    age : 34,
    logIn : false,
    logIn_days : ["Monday", "Tuesday", "wednesday"],


}
// console.log(office.name);  
// console.log(office.age);
// console.log(office.location);
// console.log(office.logIn);
// console.log(office.logIn_days[1]);

person.greeting = function (){
    console.log(`"Hello! Guys", ${this.name}`); // to get any value from object into function 
    // Note = when we use console to get output we will see  (undefined) under the "Hello! Guys" [ instan of that we can use -> return.]
    return(`"Hello! Guys", ${this.name}`); // it will not give undefined
}
// console.log(person.greeting); // it will give [Function (anonymous)]
// console.log(person.greeting());// Output =>  hello guys Nagdiv


