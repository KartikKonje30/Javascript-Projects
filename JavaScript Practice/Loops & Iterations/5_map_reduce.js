
// Map method in array
// returns a resultant array from the given array after performing certain on every element

// example: 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let result = numbers.map((num) => { return num + 10})
// console.log(result);

// Chaining of Methods in array
// applying multiple methods in a single argument is called chaining of methods

// example:
// let result = numbers.map((num) => num * 10).map((num) => num + 2).filter((num) => num % 2 == 0)
// console.log(result);


// Reduce method in array
// reduce method has two parameters i.e. accumulator and current value
// on which it returns the calculated result by adding current value to the accumulator
// you need to provide accumulator a initial/start value

// syntax: 

// numbers.reduce((accumulator, currentValue) => ( accumulator + currentValue ), accumulator_startValue)

// using simple function

// let result = numbers.reduce(function (acc, curVal){ 
//     console.log(`Accumulator: ${acc} and Current Value: ${curVal}`); 
//     return acc + curVal }, 0)
// console.log(result);

// using arrow function

// let result = numbers.reduce((acc, curVal) => acc + curVal, 0)
// console.log(result);

// example: 

// let shoppingCart = [
//     {
//         product: 'JavaScript Course',
//         price: 599
//     },
//     {
//         product: 'Java Course',
//         price: 899
//     },
//     {
//         product: 'Python Course',
//         price: 799
//     },
// ]

// adding cart price + 5% GST and returining the result
// let cartSum = shoppingCart.map((item) => item.price + item.price*0.05 ).reduce((acc, item) => acc + item, 0)
// console.log(cartSum);

