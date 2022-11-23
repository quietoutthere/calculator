let num1; 
let num2; 
let operator;

const calcDisplay = document.getElementById('display');
const numbers = document.querySelectorAll('button.number');
numbers.forEach((btn) => {;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        buttonValue = e.target.value;
        calcDisplay.innerText = buttonValue;
        debugger;
        if (!operator && !num1) {
            num1 = buttonValue;
            calcDisplay.textContent = buttonValue;
        } else if (operator === '=' && !!num1) {
            calcDisplay.textContent = buttonValue;
            num1 = buttonValue;
            operator = undefined;
        } else if (!operator && !num1) {
            num1 = buttonValue;
        } else if (!!num2) {
            num2 = num2 + buttonValue;
            calcDisplay.textContent = num2;
        } else if(!!operator && !!num1) {
            num2 = buttonValue;
            calcDisplay.textContent = num2;
        } else if (!!num1) {
            num1 = num1 + buttonValue;
            calcDisplay.textContent = num1;
        } else if (!!operator && !num1) {
            num1 = buttonValue;
            calcDisplay.textContent = num1;
        } 
    })
});

const chooseOperator = (event) => {
    const target = event.target.id;
    debugger;
    if (!!operator && !!num2) {
        if (operator === '+') {
            num1 = parseInt(num1) + parseInt(num2);
            num2 = undefined;
            calcDisplay.textContent = +num1.toFixed(3);
        } if (operator === '-') {
            num1 = parseInt(num1) - parseInt(num2);
            num2 = undefined;
            calcDisplay.textContent = +num1.toFixed(3);
        } if (operator === '/') {
            num1 = parseInt(num1) / parseInt(num2);
            num2 = undefined;
            calcDisplay.textContent = +num1.toFixed(3);
        } if (operator === '*') {
            num1 = parseInt(num1) * parseInt(num2);
            num2 = undefined;
            calcDisplay.textContent = +num1.toFixed(3);
        } 
        operator = target;
        if (target === 'equal') {
            calcDisplay.textContent = +num1.toFixed(3);
            num2 = undefined;
        } 
    } else {
        operator = target;
    }
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