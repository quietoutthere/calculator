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

function storedValue() {
    const grabValue = calcDisplay.textContent; 
    return parseFloat(grabValue);
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
//Description: get equals sign to fire off numbers and operators

//Step 1: user presses 4
//Expected: 1 shows up on display
//Actual: IT WORKS

//Step 2: user presses +
//Expected: + shows up in operator
//ActuaL: IT WORKS

// Step 3: user presses 3
//Expected: 2 shows up on display
//Actual: It works

//Step 4: user pesses *
//Expected: - shows up in operator 2
//Actual: It works

//Step 5: user presses 7
//Expected: 7 shows up on screen
//Actual: IT WORKS



//  else if (num1 >= 1 && !operator) {
//     num1 = num1 + buttonValue;
//     calcDisplay.textContent = num1;
// } else if (!!operator && !!operator2 && num1 >=1 && num2>=1 && num3>=1) {
//     num3 = num3 + buttonValue;
//     calcDisplay.textContent = num3;
// }  else if(!!operator && !!operator2 && num1 >=1 && num2>=1) {
//     num3 = buttonValue;
//     calcDisplay.textContent = num3;
// } else if (!!operator && num1 >= 1 && num2 >= 1) {
//     num2 = num2 + buttonValue;
//     calcDisplay.textContent = num2;
// } else if (!!operator && num1 >= 1) {
//     num2 = buttonValue;
//     calcDisplay.textContent = num2;