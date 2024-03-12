// Date Object can be used to get year, month and day. you can display timer on the webpage.

const today = new Date()
// console.log(today)

// const todays=new Date();
// const h=today.getHours();
// const m=today.getMinutes();
// const s=today.getSeconds()
// console.log(todays + h + m + s)
// console.log(`${todays} ${h}:${m}:${s}`)

//////////////////////////////////////////////////////////////////////////////////////////

let myDates = new Date();
// console.log(myDates.toString());    // Output => Sun Mar 10 2024 19:56:33 GMT+0530 (India Standard Time)
// console.log(myDates.toDateString()); // output =>  Sun Mar 10 2024
// console.log(myDates.toTimeString());  // Output => 19:58:07 GMT+0530 (India Standard Time)
// console.log(myDates.toLocaleString()); //  output => 10/3/2024, 7:58:07 pm
// console.log(myDates.toLocaleTimeString()); // Output =>  8:00:24 pm
// console.log(myDates.toLocaleDateString()); // Output =>  10/3/2024


let myOwnDate = new Date (2024, 1 , 10)
// console.log(myOwnDate.toDateString());  // output => Wed Feb 10 2024

// If you give date in string "" it will give diffrent month 
let myDate = new Date ("2024, 1 , 10")
// console.log(myDate.toDateString());  // output => Wed Jan 10 2024

// Time 
 let time = new Date("2024-03-10")
 console.log(Math.floor(new Date()/1000));