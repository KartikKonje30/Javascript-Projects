
// For-Each Loop
// Most useful loop for accessing say data from api/database
// It is a function bydefault injected in array methods to run certain operations
// This Loop already has access of element, it's index and the entire array
// syntax:

// array.forEach( Callbackfn(element: (string), index: (number), entire_array: (string[])){
    // operation to be performed
// });

// example:

let movies = ["ABCD", "Kantara", "Stree", 'Munjya', 'Bhediya', 'Stree 2'] 

// using callbackfunction 
// callbackfunction is nothing but a function returning some values or performing some action
// as we are using callbackfunction it has no name
// movies.forEach( function (ele, idx, arr){
//     console.log(`Element: ${ele}, Index: ${idx}, Array: ${arr})}`);
// })

// using arrow function as callbackfunction
// movies.forEach( (item, idx, arr) => {
//     console.log(`Item: ${item}, Index: ${idx}, Array: ${arr})}`);
// })

// using explicit function as callbackfunction
// function sample(item, idx, arr){
//     console.log(idx, item, arr); 
// }

// movies.forEach(sample) //passing reference of the object

// accessing [{}, {}, {}] from array of objects using for each loop

// const sample_array = [
//     {
//         movie_name: "ABCD",
//         rating: '8.5'
//     },
//     {
//         movie_name: "Kantara",
//         rating: '9.5'
//     },
//     {
//         movie_name: "Munjya",
//         rating: '8.7'
//     },
// ]

// sample_array.forEach((item) => {
//     console.log(`${item.movie_name}, Rating: ${item.rating}`);
// })

// This is how one can access data from array of objects


// Filter Method in array
// filters the result from the array based on condition and returns result in array

// let result = movies.filter((movie) => movie.charAt(0) == 'S')
// console.log(result);


