//********** Number ***********

// const num = 400;
// console.log(num);


// const score = new Number(500);
// console.log(score);

// console.log(score.toString().length); // numbers to string conversion using provided properties; returns a string
// console.log(score.toFixed(2)); // to specify number of decimal digits using provided properties; returns a string

// const var3 = 12.89024;
// console.log(var3.toPrecision(3)) // precisely converts the number to given digits from 1 - 21 and smartly rounds of based on given digits to round of; returns a string

// const var4 = 7000000;
// console.log(var4.toLocaleString('en-IN')); // returns a string to given format by default set in US format but can change by entering specific local in arguments

// console.log(Number.EPSILON);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);


//********** Maths ***********

// console.log(Math);
// console.log(Math.abs(-24)); //converts into positive number only and not negative if positive. returns number
// console.log(Math.round(12.67)); //rounds of the value. returns number
// console.log(Math.ceil(18.1111)); //chooses the ceiling value or upper value (before decimal pointer) even a slightest increase will increament the number. retuns number
// console.log(Math.floor(18.9999)); //chooses the floor value or lower value even next number might be very close stil it will choose the lower value itself. returns number
// console.log(Math.min(1,7,8,9)); //gives min value; returns number
// console.log(Math.max(1,4,6,9)); //gives max vallue; returns number

console.log(Math.random()); //math.random gives you any random number from 0 to 1 
console.log(Math.floor((Math.random() * 10)) + 1); //now we get numbers generated from 1 to 9 number

// for specific range random generator 

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates random number for specific range and adding min to start from min



