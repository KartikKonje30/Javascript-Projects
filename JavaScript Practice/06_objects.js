//  singleton
//  using create object method to create an object
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// let obj1 = Object.create(Object.prototype)
// obj1["name"] = 'Kartik';
// console.log(obj1);

//  Interview Tip
// How to add symbol as a key in an Object ?

let sym = Symbol('key1')

// Object literalls
const new_obj = {
    'name': "Kartik",
    age: "25",
    [sym]: 'key2',
    email: "kartikkonje@gmail.com",
    location: 'Thane',
    isLoggedIn: false,
    lastLoggedInDays: ['Monday', 'Wednesday'],
}
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

//   console.log(new_obj.greetings); // will return only function reference

//  console.log(new_obj.greetings()); // return the function execution result
//  console.log(new_obj.greetings2());

//  Object.assign(target, source) Property used to combine 2 or more objects together 
//  console.log(Object.assign({}, obj1, obj2, obj3)); will return an new object with all the key value pairs from source
//  But best way to copy is to use spread operator to copy multiple objects 

//  Object.keys() Property used to return all the keys from the object in a new array
//  Object.values() Property used to return all the values from the object in a new array
//  Object.entries() Property used to return all the entries from the array in a new array where each entry would be an array so array in array
//  Object_name.hasOwnProperty() used to check whether it includes the key value pair

// Object destructuring 
const {name: username} = new_obj
console.log(username);



