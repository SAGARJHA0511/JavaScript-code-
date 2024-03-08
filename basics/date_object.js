// Date Object can be used to get year, month and day. you can display timer on the webpage.

const today = new Date()
console.log(today)

const todays=new Date();
const h=today.getHours();
const m=today.getMinutes();
const s=today.getSeconds()
// console.log(todays + h + m + s)
console.log(`${todays} ${h}:${m}:${s}`)