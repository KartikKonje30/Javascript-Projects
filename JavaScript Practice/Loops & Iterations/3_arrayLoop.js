
// Higher Order Array Loops

// for-Of Loop
// simpltest way to loop without increamenting 

// syntax:

// for (const element of object) {
    
// }

// example:

// for array
let movies = ["ABCD", "Kantara", "Stree"] 

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


