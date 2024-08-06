//  singleton
//  using create object method to create an object
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// let obj1 = Object.create(Object.prototype)
// obj1["name"] = 'Kartik';
// console.log(obj1);

//  Interview Tip
// How to add symbol as a key in an Object ?

// let sym = Symbol('key1')

// Object literalls
// const new_obj = {
//     "name": "Kartik",
//     age: "25",
//     [sym]: 'key2',
//     email: "kartikkonje@gmail.com",
//     location: 'Thane',
//     isLoggedIn: false,
//     lastLoggedInDays: ['Monday', 'Wednesday'],
// }
// console.log(new_obj[sym]);
// console.log(new_obj.name);
//  How to access values from Object
// console.log(new_obj["name"]);
//  But what if the key type is a string "age" at that moment it won't access the value 
//  But interesting as it still works ?

// Object.freeze(object_name) used to freeze any changes made further to the object
// Object.freeze(new_obj)
// new_obj.location = 'Kalwa'
// console.log(new_obj);

// new_obj.greetings = function () {
//     return ("Welcome User")
// }

// new_obj.greetings2 = function () {
//     return `Welcome ${this.name}`
// }

// console.log(new_obj.greetings); // will return only function reference

// console.log(new_obj.greetings()); // return the function execution result
// console.log(new_obj.greetings2());

