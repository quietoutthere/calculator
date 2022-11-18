const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');
let num1; 
let num2; 
let operator;
let operator2;
let operator3;
let operator4; 

numbers.addEventListener('click', (e) => {
    e.preventDefault();
    buttonValue = e.target.value;
    calcDisplay.innerText = buttonValue;
    if (!operator && !num1) {
        num1 = buttonValue;
    } else if (num1 >= 1 && !operator) {
        num1 = num1 + buttonValue;
        calcDisplay.textContent = num1;
    }  else if ((!!operator) && num1 >= 1 && num2 >= 1) {
        num2 = num2 + buttonValue;
        calcDisplay.textContent = num2;
    } else if ((!!operator) && num1 >= 1) {
        num2 = buttonValue;
        calcDisplay.textContent = num2;
    }
    console.log('calcDisplay:', calcDisplay.textContent)
    console.log('buttonValue:', buttonValue)
    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('operator:', operator);
    console.log('operator2:', operator2);
    console.log('operator3:', operator3);
    console.log('operator4:', operator4);
    console.log('');  
});

const chooseOperator = (event) => {
    const target = event.target.id;
    if (!operator) {
        operator = target;
    } else if ((!!operator) && (!!operator2)) {
        operator3 = target;
    } else if (operator === '+' || '-' || '/' || '*') {
        operator2 = target;
    } 
}


function storedValue() {
    const grabValue = calcDisplay.textContent; 
    return parseFloat(grabValue);
}

const equalSign = document.getElementById('=');
equalSign.addEventListener('click', () => {
    calcDisplay.textContent = parseInt(num1) + parseInt(num2);
})


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
//Description: Equal Sign concatinates num1 & num2

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
//Actual: IT WORKS

//Step 5: user presses equal sign
//Expected: 15 shows up on screen
//Actual: Nothing Happens