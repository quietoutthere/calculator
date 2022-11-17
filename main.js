const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');
let num1; 
let num2; 
let operator; 

numbers.addEventListener('click', firstNumber);
function firstNumber(e) {
    e.preventDefault();
    buttonValue = e.target.value;
    calcDisplay.innerText = buttonValue;
    if (!operator && !num1) {
        num1 = buttonValue;
    } else if (num1 >= 1) {
        num1 = num1 + buttonValue;
        calcDisplay.textContent = num1;
    } else if (operator === '+' && num1 >= 1) {
        buttonValue = num2;
        calcDisplay.textContent = num2;
    } 
    
    console.log('calcDisplay:', calcDisplay.textContent)
    console.log('buttonValue:', buttonValue)
    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('operator:', operator);
    console.log('');  
};

const chooseOperator = (event) => {
    const target = event.target.id;
    operator = target;
}


function storedValue() {
    const grabValue = calcDisplay.textContent; 
    return parseFloat(grabValue);
}

// const equalSign = document.getElementById('=');
// equalSign.addEventListener('click', runEquation)



function runEquation() {

}

const fireKeys = document.getElementsByClassName('operator');
for (let keys of fireKeys) {
    keys.addEventListener('click', chooseOperator);
}

const clearDisplay = () => { 
    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        calcDisplay.textContent = '0';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    })
}

clearDisplay();

//Test Case 
//Description: Get num1 to concatinate multiple numbers ('12' + 3)

//Step 1: user presses 1
//Expected: 1 shows up on display
//Actual: IT WORKS

//Step 2: user presses 2
//Expected: 12 shows up on display
//Actual: IT WORKS

//Step 3: user presses +
//Expected: + shows up in operator 
//Actual: IT WORKS

//Step 4: user presses 3
//Expected: 3 shows up on display
//Actual: 123 shows up on screen