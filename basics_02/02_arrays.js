// push 
const animals = ["Dog", "Cat", "Loin", "Donkey"];
const  animals2 = ["Dodo", "Eagal", "Owl"];

// animals.push(animals2)                                                                                                 //single elements 
// console.log(animals);  // it will not merge // It will give output => like this [ 'Dog', 'Cat', 'Loin', 'Donkey', [ 'Dodo', 'Eagal', 'Owl' ] ]
                                            // How manys elements are there         0      1       2       3        ---------- 4 ---------- = five elements are there 
// console.log(animals[4][1]);                                            
// It will give same array 



// To merge both of arrays we can concat 

const allAnimals = animals.concat(animals2);
console.log(allAnimals);   // This way it will give in single array     
/* Output =>
[
    'Dog',  'Cat',
    'Loin', 'Donkey',        // It will give new array 
    'Dodo', 'Eagal',
    'Owl'
  ] */
  console.log(allAnimals[3]);  // Output => Eagle 



// use spread most of the time 
 
const spread = [...animals,...animals2];
console.log(spread);

const x = [1,2,3,4];
const y = [5,6,7,8]
const z = [...x,...y];
console.log(z);

// flat is used for, to make a single array 
const insideArr = [1,2,3,[4,5,6],[3,4,6,[3,5,6]]]
const real_Array = insideArr.flat(Infinity);
console.log(real_Array);

// from    is used for, to convert in any datatype into array 

console.log(Array.isArray('Hello')); // to check this is an array or not // output => false 
console.log(Array.from('Hello')); // like this it will convert into array // output =>  [ 'H', 'e', 'l', 'l', 'o' ]

// of is used for, it will bring into array 
let a = 200;
let b = 300;
let c = 100;
let  zz = Array.of(a,b,c);
console.log(zz); // Output =>  [ 200, 300, 100 ]