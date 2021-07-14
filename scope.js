'use strict';
//* SCOPE = Visibility of a VARIABLE in a file

const someFunction = () => {

    //? LOCAL SCOPE - Lives within the method
    let name = `Billy bob joe`;

    console.log(`${name} called from the function`);

}

//! We need the brackets to actually invoke the function!!!
// someFunction();

//? GLOBAL SCOPE - Visibile to everyone / Use it everywhere / Accessible within the whole file

let hello = `hello world`;

//? created without a let/const - VAR and hoists to the top of the file
let variableWithoutDeclaration = "hi";

// console.log(variableWithoutDeclaration);

const checkBalance = () => {
    let balance = 10; 
}

// checkBalance();
// console.log(balance); // Error cannot SEE balance!



let check = false; //? <- GLOBAL

const changeCheck = () => {
    check = true;
}

console.log(check); //? <- false
changeCheck();
console.log(check); //? <- true


//? We look within before going else where!!!!

console.log(`----------------`);


let flag; // <- GLOBAL VARIABLE

const test = () => {
    flag = true; 
    console.log(flag); // true
    test1();
    console.log(flag); // false
}

const test1 = () => {
    flag = false;
}

test();

console.log("-------------------");

let x; //? TRUE GLOBAL 

const anotherOne = () => {
    x = true; //? <- 
    console.log(x); //? TRUE
    theNextMethod();
    console.log(x); //? Uses Global becuase it can't access the local variable in theNextMethod();
}

const theNextMethod = () => {
    let x = false; //? LOCAL VARIABLE
    return;
}

anotherOne();

//? True true x2

//? TLDR: Always try to use local scopes where possible. If you don't have a local scope to use, use the global! Methods in a file can't READ/SEE LOCAL variables in other METHODS. "What's mine is mine".


//? EXERCISES

//? Create a function
//? Declare a variable with a value inside it(i.e.let x = 'foo') 
//? Write an if statement that checks if the variable meets a condition
//? Inside create a local variable
//? Try to access both variables and asses your output

const checkFoo = () => {

    let x = `foo`; 

    if(x==`foo`){
        let y = `boo`;
    }

    console.log(x); //? <- Lives in the method
    console.log(y); //? <- It has it's own METHOD/SCOPE / REFERENCE ERROR!

}

// checkFoo();

const doSomething = () => {
    let a = 1;
    console.log(a);
    const foo = () => {
        return "Whatever you like, I'm sharing with you!";
    }
    console.log(foo());
}

doSomething();