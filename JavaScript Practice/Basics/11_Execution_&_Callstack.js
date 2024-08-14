
// Types of Javascript Execution Context

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context


// The working of the JavaScript works on three phases:
// 1. Global Execution Context / Global Environment
// 2. Memory phase / Creation phase
// 3. Execution phase

// Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)
// So your code is first allocated in `this` refernce to the Global Execution 

// Phase 2: Memory / creation phase
// During this phase, JS engine scans the code and memory is allocated of all the variables, functions, objects, etc. and assigned the initial values for the variables , functions, etc.. For variables they are initialised as 'undefined' and for functions they are set to their function definition

// Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. 
// And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope)
// And each function creating its new variable environment and a execution thread : 
// 1. Memory phase 
// 2. Execution phase 
// The return value of the 'Function Execution' context is passed to the Global Execution Context
// After which that specific Funtion Execution context is deleted.

// And this is how the code in JS Environment functions


// Call Stack

// It's a stack having all the call made when executing a code in js engine.
// All the calls made in the js engine are performed in LIFO (Last In First Out) manner.

// For every execution first thing that comes in the stack is the Global Execution Context always.
// After which all the function calls, etc.. are called 

// For live demo:
// browser > inspect > Sources > add new snippet
// create a snippet with few functions and visually experience the call stack in the browser.