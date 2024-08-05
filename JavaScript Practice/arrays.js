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
// Also slice returns a copy and does not update the actual array but splice actually removes the element from the actual array and retruns it. 

// Methods in Array

// combining arrays
// const concat1 = ["a", "b", "c", "d"]
// const concat2 = ["e", "f", "g", "h"]

// let result_array = concat1.concat(concat2) // return a new array of combined two arrays
// console.log(result_array);

// use spread operator to combine 2 or more arrays
// let result_array = [...concat1, ...concat2, "i", "j"]
// console.log(result_array);

// flat method lets you flatten the array to a specific degree like removes array within array and converts it into a single array
// let new_array = [1, 2, 3, 4, [5, 6], [7, 8, 9,[1, 2, 3]], 10]
// console.log(new_array.flat(Infinity)); //you can also specify uptill which degree an array should be flattened 

