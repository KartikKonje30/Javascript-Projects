
// scopes

// Types:
// Global scope
// Block scope

// var, let and const are keywords for declaring variables and hold some different significance from each other.
// var is not the best case for declaring or defining variables because of issues in hoisting.
// let and const are most widely used for declaring variables as they are scope oriented.
// meaning they can only be accessed from parent scope to child scope and not vise-versa.

// function sample(){
//     const variable = 10
//     function sample2(){
//         let let_variable = 20
//         const const_variable = 30
//         console.log(variable); // child function can access parent variables
//     }
//     sample2()
//     // console.log(let_variable);  // here child variables connot be accessed by parent function
//     // console.log(const_variable);  // here child elements are block specific
// }

// sample()

// Above works same for if{} and else{} 


// ****************** Interesting Thing **********************

// Two ways of defining and declaraing functions
// Javascript runs sequentially so from top to bottom
// functions can be accessed from any where within a js file if it is declared anywhere because javascript checks for function declaration and then runs it.
// even if it is executed before function declaration will still run

// addOne(3)

// function addOne(num){  // Treated as a function
//     return num + 1
// }

// But in the second case it will throw an error 
// " Cannot access 'addTwo' before initialization "
// as expression cannot be executed first as it is declared afterwards
// because variables cannot be declared afterwards and functions can be declared, so there is a difference.

// addTwo(3)

// let addTwo = function addTwo(num){  // Treated as an expression as the variable is storing a function
//     return num + 2
// }




