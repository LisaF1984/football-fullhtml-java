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