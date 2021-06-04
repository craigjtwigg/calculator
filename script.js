console.log("Do the math, nerd!")

// VARIABLES FOR DISPLAY AND BUTTONS //

const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear');
const delBtn = document.querySelector('#delete');
const pointBtn = document.querySelector('#point');
const equalsBtn = document.querySelector('#equals');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

// EVENT LISTENERS FOR BUTTONS //

clearBtn.addEventListener('click', clear);
delBtn.addEventListener('click', backspace);
pointBtn.addEventListener('click', inputPoint);
equalsBtn.addEventListener('click', doTheMath);

numberBtns.forEach((button) => button.addEventListener('click', () => inputNumber(button.textContent)));
operatorBtns.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));


// VARIABLES FOR INPUTS //

let numberA = '';
let numberB = '';
let currentOperation = null;

// 'REMOVING' FUNCTIONS //

function clear(){
    display.textContent = "0";
    numberA = '';
    numberB = '';
    currentOperation = null;
}

function resetDisplay(){
    display.textContent ="";
}

function backspace(){
display.textContent = display.textContent.toString().slice(0, -1);
}

// APPENDING TO DISPLAY FUNCTIONS // 

function inputNumber(number){
    if (display.textContent == 0 || display.textContent == "DO THE MATH, NERD!") {
        resetDisplay();}
display.textContent += number;
}

function inputPoint(){
    display.textContent += "."
}

function oops(){
    display.textContent = "DON'T BE AN IDIOT!";
}

function doTheMath(){
    if (currentOperation === '/' && display.textContent === '0'){
        oops();
    }
    numberB = display.textContent;
    display.textContent = roundNumber(operate(currentOperation, numberA, numberB));
    currentOperation = null;
}

function roundNumber(number){
    return Math.round(number * 1000) / 1000;
}

// OPERATION FUNCTIONS //

function multiply(numberA, numberB){
    return numberA * numberB;
}

function divide(numberA, numberB){
    return numberA / numberB;
}

function plus(numberA, numberB){
    return numberA + numberB;
}

function minus(numberA, numberB){
    return numberA - numberB;
}

function setOperation(operator){
if (currentOperation !== null) doTheMath();
numberA = display.textContent;
currentOperation = operator;
resetDisplay();
}

function operate(operator, numberA, numberB){
    numberA = Number(numberA);
    numberB = Number(numberB);

    switch(operator){
        case 'x':
            return multiply(numberA, numberB);
        case '/':
            return numberB == 0 ? null : divide(numberA, numberB)    ;
        case '+':
            return plus(numberA, numberB);
        case '-':
            return minus(numberA, numberB);
        default:
            return null;            
    }
}


