const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const result = document.querySelector('#result');
const display = document.querySelector("#display");
const additionButton = document.querySelector("#add");



const printToHistory = (num1, num2, operator, result) => {
    const p = document.createElement("p"); // <p> </p>
    const text = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`); // output 

    p.appendChild(text); // Associating <p> with text // <p> OUTPUT </p>
    display.appendChild(p); // Associate the element to the existig HTML document
}


// methods 
const addition = () => {
    const first = firstNumber.value; 
    const second = secondNumber.value; 
    const computation = Number(first) + Number(second);
    result.value = computation;
    printToHistory(first, second, "+", computation);
}

const subtract = () => {
    const first = firstNumber.value;
    const second = secondNumber.value;
    const computation = Number(first) - Number(second);
    result.value = computation;
    printToHistory(first, second, "-", computation);
}

const multiply = () => {
    const first = firstNumber.value;
    const second = secondNumber.value;
    const computation = Number(first) * Number(second);
    result.value = computation;
    printToHistory(first, second, "x", computation);
}

const divide = () => {
    const first = firstNumber.value;
    const second = secondNumber.value;
    const computation = Number(first) / Number(second);
    result.value = computation;
    printToHistory(first, second, "/", computation);
}

const resetValues = () => {

    firstNumber.value="";
    secondNumber.value="";
    result.value="";

}

const clearHistory = () => {
    display.innerHTML = "";
}

additionButton.addEventListener("click", addition);