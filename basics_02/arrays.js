// Arrays => Array is collection of elements, we can represent multiple values by using single variable.
// Javascript Array are resizable, and contain different types of Datatypes.
// Like => [1,"apple", true, {name: 'john', age: 30 },  function() { console.log('Hello!'); }]

let arr = [1,2,3,4,5,6] // Accessing Array elements by using index 
console.log(arr['0']);  // => By using indexes we can access array elements. JS arrays follow the 0 based index. Means the index of the first element is 
// Output => 1

console.log(arr['10']) // Output => Undefined 
// Note = If we are trying to access array elements by using out of range index then we will get Undefined, we won't get any error.