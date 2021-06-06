console.log("Do the math, nerd!")


// VARIABLES FOR DISPLAY AND BUTTONS //

const outer = document.querySelector('.outer');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear');
const delBtn = document.querySelector('#delete');
const pointBtn = document.querySelector('#point');
const equalsBtn = document.querySelector('#equals');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const button = document.querySelectorAll('button');

let gotResult = false;

// EVENT LISTENERS FOR BUTTONS //

clearBtn.addEventListener('click', clear);
delBtn.addEventListener('click', backspace);
pointBtn.addEventListener('click', inputPoint);
equalsBtn.addEventListener('click', doTheMath);

numberBtns.forEach((button) => button.addEventListener('click', () => inputNumber(button.textContent)));
operatorBtns.forEach((button) => button.addEventListener('click', () => applyOperator(button.textContent)));
button.forEach((button) => button.addEventListener('click', () => playButtonSound())); 

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

// AUDIO FUNCTIONS

function playErrorSound(){
    const errorsound = document.getElementById('errorsound');
    if(!errorsound){ return; }
    errorsound.currentTime = 0;
    errorsound.play();
}

function playButtonSound(){
    const buttonsound = document.getElementById('clicksound');
    if(!buttonsound){ return; }
    buttonsound.currentTime = 0;
    buttonsound.play();
}

// ERROR FUNCTIONS

function errorDisplay(){
    display.style.background = 'rgb(170, 28, 10)';
    display.style.color = '#FFFFFF';
}

function errorShake(){
    display.style.animation = 'shake 0.2s';
    display.style.animationIterationCount = '2';
}

function oops(){
    display.textContent = "YOU IDIOT...";
    playErrorSound();
    errorDisplay();
    errorShake();
}

function doNotCrash(){
    if(display.textContent == "Infinity"){
        resetDisplay();
        oops();
    }
}


// VARIABLES FOR INPUTS //

let numberA = '';
let numberB = '';
let currentOperation = null;

// 'REMOVING' FUNCTIONS //

function clear(){
    defaultScreen();
    display.textContent = "0";
    numberA = '';
    numberB = '';
    currentOperation = null;
}

function resetDisplay(){
    defaultScreen();
    display.textContent ="";
}

function backspace(){
    if (display.textContent == "YOU IDIOT..."){
        resetDisplay();
    }
    display.textContent == "" || display.textContent == "0" || display.textContent == "D" ? 
    display.textContent = "0" : display.textContent = display.textContent.toString().slice(0, -1);
}

function resetShake(){
    display.style.animation = 'none';
}

function defaultScreen(){
    display.style.background = 'rgb(23, 102, 23)';
    display.style.color = 'rgb(220, 252, 157)';
    resetShake();
}

// APPENDING TO DISPLAY FUNCTIONS // 

function inputNumber(number){
    
    if (gotResult === true || display.textContent === "0" || display.textContent == "DO THE MATH!" || display.textContent == "YOU IDIOT...") {
        resetDisplay();
    }
display.textContent += number;
gotResult = false;
}

function inputPoint(){
    display.textContent.includes(".") ? display.textContent += "" : display.textContent += ".";
}

// CALCULATION FUNCTIONS //

function roundNumber(number){
    return Math.round(number * 1000) / 1000;
}    

function getResult(){
    gotResult = true;
    const result = display.textContent = roundNumber(getOperator(currentOperation, numberA, numberB));
    return result;
}

function doTheMath(){ // TRIGGERED BY EQUALS BUTTON //
    numberB = display.textContent;
    getResult();
    currentOperation = null;
    doNotCrash();
}

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

function applyOperator(operator){
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


