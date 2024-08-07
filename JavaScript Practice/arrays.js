// Array

// Creation using new keyword
// const first_array = new Array(4)
// console.log(first_array)

// Directly adding values while creation
// const second_array = [1, 2, 3, 4, 5]
// console.log(second_array)

// second_array.push(6) //adds element from right
// second_array.push([7, 8, 9])  //adds array from right
// console.log(second_array)

// second_array.pop() //Last In First Out (LIFO) removes element from right 
// console.log(second_array);

// second_array.unshift(9) //adds element from left
// second_array.unshift([0, 1, 2]) //adds array from left
// console.log(second_array);

// second_array.shift() //First In Last Out (FILO) removes element from left
// console.log(second_array);

// const new_array = [1, 2, 3, 4, 5]

// console.log(new_array.slice(1, 3)) // returns copy of from selected index (begining, end)
// console.log(new_array.slice(1)) // if not provided end index then slices till end of the array.
// console.log(new_array);

// let another_array = new_array.splice(1, 3) // removes the selected indexed elements from the existing array
// console.log(new_array.splice(1)) // if not provided end index then removes element till end of the array.
// console.log(new_array);
// console.log(another_array);

// Difference between slice and splice i.e slice does return til end - 1 and splice return till end.
// Also slice returns a copy and does not update the actual array but splice actually removes the element from the actual array and returns it. 

// Methods in Array

// combining arrays
// const concat1 = ["a", "b", "c", "d"]
// const concat2 = ["e", "f", "g", "h"]

// let result_array = concat1.concat(concat2) // return a new array of combined two arrays
// console.log(result_array);

// use spread operator to combine 2 or more arrays 
// in general spreads the iterable values like arrays and strings 
// let result_array = [...concat1, ...concat2, "i", "j"]
// console.log(result_array);
// Only iterable values, like Array and String, can be spread in array literals and argument lists. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:
// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable
// On the other hand, spreading in object literals enumerates the own properties of the value. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.
// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.
// const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }

// flat method lets you flatten the array to a specific degree like removes array within array and converts it into a single array
// let new_array = [1, 2, 3, 4, [5, 6], [7, 8, 9,[1, 2, 3]], 10]
// console.log(new_array.flat(Infinity)); //you can also specify uptill which degree an array should be flattened 

//  Array.isArray method 
//  console.log(Array.isArray("new_array")); // returns boolean value true or false based on argument passed

//  Array.from method
//  console.log(Array.from("Kartik")); // returns an array from given array like object
//  console.log(Array.from({name: "Kartik", phone: 987654321})); // interesting that it return empty array if not provided key before giving object

//  Array.of method
// let var1 = 100
// let var2 = 200
// let var3 = 300
// let new_array = Array.of(var1, var2, var3, var2, "abc", 123, [1,2,3], {name: "kartik"}, function() { return "Hello World!"; }) // returns a new array from given set of elements can be variable / arrays / objects / functions / values
// console.log(new_array[8]);

