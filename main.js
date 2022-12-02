let num1; 
let num2; 
let operator;
let hasDecimal = false;

const calcDisplay = document.getElementById('display');
const numbers = document.querySelectorAll('button.number');

numbers.forEach((btn) => {;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        buttonValue = e.target.value;
        if (buttonValue === '.' && hasDecimal) return
        if (buttonValue === '.' && !hasDecimal) hasDecimal =  true;
        calcDisplay.innerText = buttonValue;
        if (!operator && !num1) {
            num1 = buttonValue;
            calcDisplay.textContent = buttonValue;
        } else if (operator === 'equal' && !!num1) {
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
    if (operator && !!num2) {
        if (operator === '+') {
            num1 = parseFloat(num1) + parseFloat(num2);
            num2 = undefined;
        } if (operator === '-') {
            num1 = num1 - num2;
            num2 = undefined;
        } if (operator === '/') {
            num1 = num1 / num2;
            num2 = undefined;;
        } if (operator === '*') {
            num1 = num1 * num2;
            num2 = undefined;
        } 
        operator = target;
        if (target === 'equal') {
            num2 = undefined;
        } 
        setDisplay(num1);
    } else {
        operator = target;
    }
    hasDecimal = false;
}

const fireKeys = document.getElementsByClassName('operator');
for (let keys of fireKeys) {
    keys.addEventListener('click', chooseOperator);
}

const clearCalc = () => { 
    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        calcDisplay.textContent = '0';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        hasDecimal = false;
    })
}

const setDisplay = (displayNum) => {
    calcDisplay.textContent = parseFloat(displayNum.toFixed(3));
}

clearCalc();