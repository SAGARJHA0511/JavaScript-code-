// Arrays => Array is collection of elements, we can represent multiple values by using single variable.
// Javascript Array are resizable, and contain different types of Datatypes.
// Like => [1,"apple", true, {name: 'john', age: 30 },  function() { console.log('Hello!'); }]

let arr = [1,2,3,4,5,6] // Accessing Array elements by using index 
// console.log(arr['0']);  // => By using indexes we can access array elements. JS arrays follow the 0 based index. Means the index of the first element is 
// Output => 1

// console.log(arr['10']) // Output => Undefined 
// Note = If we are trying to access array elements by using out of range index then we will get Undefined, we won't get any error..

const arr1 = new Array(1,2,3,4);
console.log(arr1 );

// Array methods 

//push 
let newarr = [1,2,3,4]  // add elements to end 
newarr.push(5);
newarr.push(6)
 // output => [1,2,3,4,5,6]

//pop 
newarr.pop(); // remove last element from array 
console.log(newarr);// output => [1,2,3,4,5]

//unshift 
let array = [1,2,3,4];
array.unshift(5)  // add element in first position  // Output => [5,1,2,3,4]
array.shift() // remove first element of the array  // output => [1,2,3,4]
console.log(array);

// include 
let array1 = [1,2,3]
console.log(array1.includes(0)); // to find elements in array - it not works on index whatever value do you want find, add that, thats all 

//indexOf 
let arr2 = [1,2,3,4]
console.log(arr2.indexOf(2)); // find index of specified elements // output => 1
console.log(arr2.indexOf(5)); // if the element is not available then it will get // output -1

//join 
console.log(arr2.join()); // it convert into string 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// slice 

let myarr = [0,1,2,3,4,5]; //  slice() method extracts the part of the given array and returns it. This method doesn't change the original array
console.log(myarr);
console.log(myarr.slice(1,4)); // Output => [1,2,3] 4 will be not include 
console.log(myarr);

// splice
 let myarr1 = ['Angular.js', 'React.js', 'vue.js']   // 0 - is index, that were you want to start from 
 removElement = myarr1.splice(0,2,"HTML", "Javascript")  // 2- how many elements want to add 
 console.log(myarr1); // Output = [ 'HTML', 'Javascript', 'veu.js' ]



let d = [1,2,3,4,5];
removedArr = d.slice(1,3);
console.log(removedArr)
