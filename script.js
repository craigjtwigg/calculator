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

// KEYBOARD SUPPORT //
document.addEventListener('keydown', () => keyboardConversion(event.key))

function keyboardConversion(){
    if      (event.key === "0") { document.getElementById('0').click(); } 
    else if (event.key === "1") { document.getElementById('1').click(); } 
    else if (event.key === "2") { document.getElementById('2').click(); }  
    else if (event.key === "3") { document.getElementById('3').click(); } 
    else if (event.key === "4") { document.getElementById('4').click(); } 
    else if (event.key === "5") { document.getElementById('5').click(); } 
    else if (event.key === "6") { document.getElementById('6').click(); } 
    else if (event.key === "7") { document.getElementById('7').click(); } 
    else if (event.key === "8") { document.getElementById('8').click(); } 
    else if (event.key === "9") { document.getElementById('9').click(); } 
    else if (event.key === "Backspace") { document.getElementById('delete').click(); } 
    else if (event.key === "c" || event.key === "C") { document.getElementById('clear').click(); } 
    else if (event.key === "+") { document.getElementById('plus').click(); } 
    else if (event.key === "-") { document.getElementById('minus').click(); } 
    else if (event.key === "x" || event.key === "X" || event.key === "*" ) { document.getElementById('multiply').click(); } 
    else if (event.key === "/") { document.getElementById('divide').click(); }
    else if (event.key === "=") { document.getElementById('equals').click(); } 
    else if (event.key === ".") { document.getElementById('point').click(); }  

}


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
    display.textContent == "" || display.textContent == "0" || display.textContent == "D" ? 
    display.textContent = "0" : display.textContent = display.textContent.toString().slice(0, -1);
}

// APPENDING TO DISPLAY FUNCTIONS // 

function inputNumber(number){
    if (number === isNaN){
        display.textContent = "";
    }
    if (display.textContent == 0 || display.textContent == "DO THE MATH, NERD!") {
        resetDisplay();
    }
display.textContent += number;
}

function inputPoint(){
    display.textContent.includes(".") ? display.textContent += "" : display.textContent += ".";
}

function oops(){
    (display.textContent = "DON'T BE AN IDIOT!");
}

// CALCULATION FUNCTIONS //

function doTheMath(){ // TRIGGERED BY EQUALS BUTTON //
    if (display.textContent == '0' && currentOperation == '/'){
        alert("Don't be an idiot.");
    }
    numberB = display.textContent;
    display.textContent = roundNumber(getOperator(currentOperation, numberA, numberB));
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

function getOperator(operator, numberA, numberB){
    numberA = Number(numberA);
    numberB = Number(numberB);

    switch(operator){
        case 'x':
            return multiply(numberA, numberB);
        case '/':
            return divide(numberA, numberB);
        case '+':
            return plus(numberA, numberB);
        case '-':
            return minus(numberA, numberB);
        default:
            return null;            
    }
}


