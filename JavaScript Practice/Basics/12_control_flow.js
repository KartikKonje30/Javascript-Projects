
// Control flow

// To have control over the actual flow of the code we use conditonal beased approach.
// They are:
// if statement
// if else statement
// switch cases

// Operators :

// Arithmetic Operators: +, -, *, /, %
// Logical Operators: <, >, <=, >=, ==, ===, != , !== , &&, ||
// Ternary Operator: condition ? true : false

// Truthy Values 

// Bydefault JS has declared some values as true, those are:
// true, "false", " ", [], {}, function(){}

// Falsy Values

// Bydefault JS has declared some values as false, those are:
// false, '', 0, -0, 0n ( for BigInt ), null, undefined, NaN

// How to check if an array is empty

// let sample_array = [1]
// console.log(sample_array.length == 0);

// How to check if an object is empty

// let sample_object = {}
// console.log(Object.keys(sample_object).length == 0);


// Nullish Coalescing Operator (??): null undefined

// Say for example if we are fetching some date from the database and if it is null/undefined beacuse it is a return value and we don't know and we need to handle such situations
// At such instances we can used this operator to handle this
// Syntax: value = condition1 ?? condition2

// for Eg: 

// let val1;
// val1 = 10 ?? 20; // returns 10
// val1 = null ?? 20; // returns 20
// val1 = undefined ?? 20; // returns 20
// val1 = null ?? 10 ?? 20 

// console.log(val1);
