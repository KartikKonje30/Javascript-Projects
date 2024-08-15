
// Higher Order Array Loops

// FOR_OF & FOR_IN LOOP

// for-Of Loop
// simpltest way to loop without increamenting 

// syntax:

// for (const element of object) {
    
// }

// example:

// for array
// let movies = ["ABCD", "Kantara", "Stree"] 

// for(const movie of movies){
//     console.log(movie);
// }

// for string
// let name = "Kartik Konje"
// for(const char of name){
//     if(char == " "){
//         continue
//     }
//     console.log(`Character is : ${char}`);
// }


// Maps
// Just like a Object, that stores unique key-value pairs

// let map1 = new Map();

// map1.set('IN', 'INDIA')
// map1.set('USA', 'UNITED STATES OF AMERICA')
// map1.set('FR', 'FRANCE')

// console.log(map1);

// But for iteration in maps we can use for of loop
// use in square braces [key, value] to access the specific value

// for(const [key,value] of map1){
//     console.log(`${key} : ${value}`); 
// }

// But does for-of loop work in Object ?????

// let myObject = {
//     'IN': 'INDIA',
//     'USA': 'UNITED STATES OF AMERICA',
//     'FR': 'FRANCE',
// }

// for(const key of myObject){
//     console.log(key);
// }

// Throws an error : Object is not iterable
// For-of will only works on iterable datatypes like array, string

// for(const char of 'Kartik'){ // example of for-of in string
//     console.log(char);   
// }


// For iterating in Objects we can use For-in Loop
// syntax:

// for (const key in object) {
// }

// example :

// for(const key in myObject){
//     console.log(key); // for printing keys
//     console.log(myObject[key]); // for printing values
// }

// can For-in loop be used in Arrays ????

// for(const key in movies){
//     console.log(key); // for printing key i.e. index
//     console.log(movies[key]); // for printing values / elements
// }

// Answer: YES
// In array keys are its index and element is accessed from that key 

// for(const key in 'Kartik'){ // for string
//     console.log(key); 
// }


// For-Each Loop
// Most useful loop for accessing say data from api/database
// It is a function bydefault injected in array methods to run certain operations
// This Loop already has access of element, it's index and the entire array
// syntax:

// array.forEach( Callbackfn(element: (string), index: (number), entire_array: (string[])){
    // operation to be performed
// });

// example:

let movies = ["ABCD", "Kantara", "Stree", 'Munjya', 'Bhediya'] 

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