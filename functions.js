// 'use strict'; // works more cleanly / prevents mistakes!


/*  Functions are methods - they do something 
*   Required: An output
*   Required: A name
*   Optional: Parameters
*/

add(3,4);
// addition(3,4); // THROW AN ERROR! - UNACCEPTABLE BEHAVIOUR

//! Function Declaration - HOITS (DON'T USE!!!)

function add(a , b){
    console.log(a + b);
}

//! Function Expression

const addition = function(a,b){
    console.log(a+b);
}

//! Arrow function - ES6 (Latest Standard / Best Practise)

//? SYNTAX: const NAMEOFFUNCTION = (params) => { body }

const secondAddition = (a,b) => {
    // Method body
    console.log(a + b);
}

//! One line Arrow function
const subtraction = (a,b) => console.log(a-b);


// EXERCISES

//?  Create a FUNCTION DECLARATION that takes in 2 parameters num1 and num2 and subtracts the two numbers.

function subtract(num1, num2){
    // INSTRUCTIONS
    return console.log(num1 - num2);
}

subtract(50,100);

//? Amend the above function to be a FUNCTION EXPRESSION

const hiLisa = function(num1,num2){
    return console.log(num1-num2);
}

hiLisa(-10,50);


//? Amend the above function to be a ARROW FUNCTION

const subtract3 = (num1, num2) => {
    return console.log(num1 - num2);
}

subtract3(70,20);


//?  Create a function expression called welcome that take in name, age,gender as a parameters. The outcome should be like so: e.g. "My name is Felix Cited, i am 20 years old and of gender Male"


const dan = function(name,age,gender){
    return console.log(`My name is ${name} I am ${age} and of gender ${gender}`);
}

dan(`Felix Cited`,20,`Male`);
dan(`Harry Pawter`, 30, `Male`);
dan(`Jimmy Chew`, 45, `Female`);
dan(`Cameron`,100,`Male`);

//? Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.

const powerUp = (n1,n2) => {
    const value = Math.pow(n1,n2);

    return console.log(`POWER OF ${n1} = ${value}`); // 3 * 4 = Power of both 
}

powerUp(3,3);
powerUp(2,3);