
// Immediately Invoked Function Expressions

// when we want to run some function at the start
// can be used if you want to connect database as soon as you run your application
// in such we can use IIFE 
// also to not make global scope pollute the function scope we use IIFE
// as child function can access parent function

// syntax :- ('function{}')('parenthesis');

// Named IIFE because it has a name of the function
(function sample(){
    console.log('DB CONNECTED');
    })(); // to know iife when to end you need to end with semicolon otherwise it will throw an error

// Simple IIFE because it does not have a name as it is an arrow function
((name) => {
    console.log(`DB CONNECTED TO ${name}`); 
    })("Kartik") // can pass parenthesis to arrow function in IIFE

    
