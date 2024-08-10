
//  This keyword 
//  Used to reference the current context of the scope

// const user = {
//     username: "kartik",
//     email: 'abc@gmail',
//     welcomeMessage: function (){
//         console.log(`${this.username}, Welcome to website.`);
//         console.log(this); // returns the current context of this scope
        
        
//     }
// }

// user.welcomeMessage() 
// user.username = 'Pratik' // after changed the value of the property the current context is updated in this scope.
// user.welcomeMessage() // gets the latest updated context from the scope

// Also lets see what happens with this scope of this file meaning lets log this 

// console.log(this); // logs ' {} '

// empty object is returned as current context is not set for this file in the node environment with global object.

// also if one console.log(this) in the browser you will be returned a window object as it is the context of the browser where DOM is manipulated
// so each environment has some context filled in which is an global object

// Lets see how this works in a function

// function sample(){
//     // console.log(this);  

//     // let username = 'kartik'
//     // console.log(this.username); // returns undefined
// }

// sample()

// Returns :
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  crypto: [Getter]
}  */}

// we get current context from the function 
// what if we try to log this.username and lets see whether it will work
// it returns undefined
// so in function this keyword does not work like the object

// Arrow Function

// syntax : () => { return }

// const addOne = (num) => { return num + 1 }
// console.log(addOne(3))

// Implicit Function : where you don't need to return it is by default known

// const addOne = (num) => (num + 1) 
// console.log(addOne(3))

// also can be used without paranthesis like num + 1
// But if we need to return an object at that time it will except a return so it is a better practice to use paranthesis () at such time
// so it won't give an error
// const addOne = (num) => ({username: 'kartik'})


// Explicit Function : where you have to use return and use curly braces {} 
// Example line no. 71






