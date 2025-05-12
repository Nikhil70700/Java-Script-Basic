//*============================
//  Math Object In Java Script
//==============================

//?  Math: The math namespace object contains static properties and method for mathematical constants and functions.
//** Math works with the Number type .It doesn't work with big Int */


//?  Constants:-

//** Math.PI: Represents the mathematical constant pi (π) */

const piValue=Math.PI.toFixed(3).toString().length;

console.log(piValue);



//*===================
//*  Basic Operations
//*=================== 

//! Math.abs():
//* The Math.abs() static method returns the absolute value of a number.
//or in simple,how far the number is from 0. It will be always positive

const absValue=Math.abs(-5);
console.log(absValue + "ABS"); // Output: 5


//! Difference Between Round,Floor , and Ceil------->


//?  Maths.round():- Rounds to the nearest integer.

//* Ex:-
console.log(Math.round(4.5));

console.log(Math.round(4.1));


//?  Math.floor():- Always rounds down to the nearest integer.

//*Ex:- 
console.log(Math.floor(4.9));
console.log(Math.floor(4.1))
console.log(Math.floor(3.6))

//? Math.ceil():-  Always rounds up to the nearest integer.

//Ex:-
console.log(Math.ceil(4.1));
console.log(Math.ceil(5.9));


//!Math.trunc(x): 
//? Returns the integer part of X:
const truncvalue1=Math.trunc(3.7)
const truncvalue2=Math.trunc(4.7)
console.log(truncvalue1);
console.log(truncvalue2);

//!**!  Math.trunc()  vs Math.floor()     **!**!

const truncvalue3=Math.trunc(-3.7); //-3
const floorValue1=Math.floor(-3.7);//-4
console.log(truncvalue3);
console.log(floorValue1);


//TODO Notes:

//No matter how many chars are there after decimmal they all will always return only number before the decimal .

//round rounds to the nearest integer.
//floor always rounds down to the nearest integer.
//ceil always rounds up to the nearest integer.



//*=============================================
//* Exponential and Logerithmic Functions:
//*=============================================

//?Math.pow(x,y):
// returns the value of x to the power of y.

console.log(Math.pow(2,4));
console.log(2 ** 4)



//? Math.sqrt():
// returns the square root of x.


console.log(Math.sqrt(16));


//?Math.log(x):
// returns the natural logarithm of x.
console.log(Math.log(10));




//! **  Math.random number  **
// returns a random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.round(Math.random()*100));