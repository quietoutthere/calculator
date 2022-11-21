let num1; 
let num2; 
let total;
let operator;

const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');
numbers.addEventListener('click', (e) => {
    e.preventDefault();
    buttonValue = e.target.value;
    calcDisplay.innerText = buttonValue;
    if (!operator && !num1 && !!total) {
        num1 = buttonValue;
        total = total + buttonValue;
        calcDisplay.textContent = buttonValue;
    }  else if (!operator && !num1) {
        num1 = buttonValue;
        total = buttonValue;
    } else if (!!num2) {
        num2 = num2 + buttonValue;
        calcDisplay.textContent = num2;
        total = total + buttonValue;
    } else if(!!operator && !!num1) {
        num2 = buttonValue;
        calcDisplay.textContent = num2;
        total = total + buttonValue;
    } else if (!!num1) {
        num1 = num1 + buttonValue;
        calcDisplay.textContent = num1;
        total = total + buttonValue;
    } else if (!!operator && !num1) {
        num1 = buttonValue;
        calcDisplay.textContent = num1;
        total = total + buttonValue;
    }

    console.log('calcDisplay:', calcDisplay.textContent)
    console.log('buttonValue:', buttonValue)
    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('operator:', operator);
    console.log('total:', total);
    console.log(''); 
});

const chooseOperator = (event) => {
    const target = event.target.id;
    if (!!num2) {
        calcDisplay.textContent = total;
        total = total + target;
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    } else if (!operator || (!!operator && !!num1)) {
        operator = target;
        total = total + target;
    } 
}

const equalSign = document.getElementById('=');
equalSign.addEventListener('click', () => {
    calcDisplay.textContent = total;
    num1 = undefined;
    num2 = undefined;
    num3 = undefined;
    operator = undefined;
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
        num3 = undefined;
        operator = undefined;
        total = undefined;
    })
}

clearDisplay();

//Test Case 
//Description: get equals sign to run equations

//Step 1: User presses 1
//Expected: 1 shows up on display
//Actual: IT WORKS

//Step 2: User presses +
//Expected: + shows up in operator
//Actual: It WORKS

//Step 3: User presses 2
//Expected: 2 shows up on display
//Actual: IT WORKS

//Step 4: User presses -
//Expected: 3 shows up on screen
//Actual: 1+3 shows up on screen

//Step 5: User presses 3
//Expected: 3 shows up on screen
//Actual: IT WORKS

//Step 6: User presses /
//Expected: / shows up in operator
//Actual: IT WORKS

//Step 7: User presses 4
//Expected: 4 shows up on screen
//Actual: IT WORKS

//Step 8: User presses *
//Expected: 0 shows up on screen
//Actual: 1+2-3/4 shows up on screen




