// Datatypes are categorised based on what kind of data we try to access from the memory.
// So when we try to access data which is a type of value it uses call by value and we get a copy of the data and whenever we make any changes it will not be updated in the original data i.e. Primitive
// And when we try to acces data except any value, we get call by reference and gets the actual reference of the data from the memory i.e. Non-Primitive

// Primitive Datatypes

// 7 Types : 

//Number 
//stores up a integer value in the variable upto 2^53
const integer = 123456

//String
//stores up a string value in the variable
const name = "Kartik"

//Boolean
//stores true or false in the variable
const boolean = true

//Null
//defines a variable as empty or null
let value = null

//Undefined
//defines a variable as undefined by default or you can explicitly assign it as undefined
let value2;  // value2 = undefined  

//Symbol
//defines a unique or immutable value
let id = Symbol('123')
//let anotherId = Symbol('123');
//console.log(id === anotherId); // Output: false
// also whenever we give same symbol to a different variable it will still return unique numbers 

//BigInt
//stores a integer value greater than 2^53 and unlimited value can be stored depending upon memory
let bign = 38727980123842392n


// Non Primitive Datatypes

// 4 Types : 

//Array
//Collection of data accessed by their indexed value starting from 0
let array1 = ["123",123, null, undefined, Symbol('123'), 121333243n, true]
// console.log(typeOf(array1));  // Output: Object

//Object
//Collection of key-value pairs i.e. properties and their respective values
let obj = {
    name: 'Kartik',
    id: 287174,
    phone: 9143229322,
}
// console.log(typeOf(obj));  // Output: Object

//Function
//a reusable block of code that can be invoked or called with argument 
function funct1() {
    console.log("using function");
}
// you can also define a value as a function
let value3 = function(){
    console.log("using function as a value");
}

//Using typeOf you can find out what is the datatype of that variable.
// console.log(typeof(value3)) //Output: function

