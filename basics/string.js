//concatenate 2 virables 
const nameIn =  "gon"
const ageIn = 43;
// console.log(name + age + "Google");

// String Interpolation 

const name = "john ";
const age = 45 ;
console.log(`My name is ${name} I'm ${age} years old`)// provides more readables, convenient syntax to format string 

// How to access key value pair in string 

const cityName = "Mumbai"// 0 = M, 1=u, 2=m, 3=b, 4=a, 5=i
console.log(cityName[0]);

//one more way to declear string 
const emailId = new String("one.gmail.com")
// console.log(emailId)

// prototype in string 
// check IndexOf 
console.log(emailId.indexOf('a'));

// trim 
 const oneId = "    gmail.com     " // there is lot of space is there to remove space, we have to trim.
 console.log(oneId);                // output -         gmail.com
 console.log(oneId.trim());        //           gmail.com
 

 // String Replace 
 const url = "http://prototype%@.com"  // i want to change url look.  
 console.log(url.replace('%@','-'));

 //lenght 

 const  msg =  "welcome to my world"
  const len = msg.length;
 console.log(len);