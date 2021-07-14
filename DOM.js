'use strict';

//? SELECT THE IMG ELEMENT

//? # = ID
//? ID = LOGO

//! Modifying existing HTML elements

let logo = document.querySelector("#logo");
logo.setAttribute("height","300");
logo.setAttribute("width","50");

console.dir(logo);

//! Create new HTML elements

let newHeading = document.createElement("h1"); //<h1> </h1>
let text = document.createTextNode("We love JavaScript!!!!"); // We love JavaScript

newHeading.appendChild(text); // <h1> We love JavaScript </h1>

//? 1. Grab the DIV from the HTML 
let divAddToMe = document.querySelector("#addToMe");

divAddToMe.appendChild(newHeading);

//? Document.querySelector('') - Selecting something from the HTML to be used in the JS file. 
//? Document.createElement('') - Creating an element in JS
//? Document.createTextNode('') - Creating String/Text in JS
//? something.appendChild(child) - Establishing a relationship between two elements
