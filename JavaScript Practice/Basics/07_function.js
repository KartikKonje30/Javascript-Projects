
//  Functions

// syntax : funtion function_name ( parameters ) {  // block of code  }

// function sample (){
//     console.log('K');
//     console.log('A');
//     console.log('R');
//     console.log('T');
//     console.log('I');
//     console.log('K');
// }

// console.log(sample) // Passed as reference only name meaning you are passing the reference of the function
// console.log(sample()); // with paranthesis is execution of the function

// const fun2 = sample // passed as a reference 
// console.log(fun2()); // execution of the same function

// function calculateCartPrice (nums){
//     console.log(nums); 
// }

// calculateCartPrice() // return undefined if arguments not passed
// calculateCartPrice(5) // will log value 

// function calculateCartPrice (nums = 5){
//     console.log(nums); 
// } // we can also implicitly define parameter with a value so that if not passed any argument will given assigned value

// But what if there are multiple values passed as an argument to the function and we want to get all of it to the function
// Then we can use spread or rest operator in the parameter to get all the values
// returns all the values in a array
// function calculateCartPrice (...nums){ // also can be passed like this (val1, val2, ...nums) but in such cases val1 & val2 we get first two values and rest in an array
//     console.log(nums); 
// }

// calculateCartPrice(100, 200, 300, 400, 500) 

// passing object as arguments

// let sample = {
//     product_name: "IPAD Pro",
//     price: 89000
// }

// function getObject(getObj){
//     console.log(`Product is ${getObj.product_name} and Price is ${getObj.price}`); 
// }

// getObject(sample) // provide an object as argument
// getObject({
//     product_name: "IPAD Pro",
//     price: 89000
// }) // pass object in the argument itself

// passing array as argument

// const sample_array = [100, 200, 400, 600, 800, 900]

// function getThirdArrayValue(getArr) {
//     console.log(getArr[3]);
// }

// getThirdArrayValue(sample_array) // provide an array as argument 
// getThirdArrayValue([100, 300, 600, 900]) // pass array in the argument itself

