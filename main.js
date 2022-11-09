const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');
let num1; //get 1 inside here
let num2; // get 2 inside here
let operator; // get + in here

numbers.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(num1, num2, operator);
    buttonValue = e.target.value;
    let node = document.createTextNode(buttonValue);
    const newValue = calcDisplay.appendChild(node);
});


function storedValue() {
    const grabValue = calcDisplay.textContent; 
    return parseFloat(grabValue);
}

const equalSign = document.getElementById('=');
equalSign.addEventListener('click', runEquation)

//possible switch case with operator
const doTheMath = (event) => {
    const target = event.target.id;
    num1 = storedValue();
    if (target === '+') {
        num2 = storedValue()
        calcDisplay.textContent = num1;
        return '+'
    } else if (target === '-') {
        num2 = storedValue();
        calcDisplay.textContent = num1;
        return '-'
    } else if (target === '/') {
        num2 = storedValue();
        calcDisplay.textContent = num1;
        return '/'
    } else if (target === '*') {
        num2 = storedValue();
        calcDisplay.textContent = num1;
        return '*'
    } 
}

function runEquation(operator) {
    switch (operator) {
        case '+' :
            return num1 + num2
        case '-' :
            return num1 - num2
        case '/' :
            return num1 / num2
        case '*' :
            return num1 * num2
    }
}

const fireKeys = document.getElementsByClassName('operator');
for (let keys of fireKeys) {
    keys.addEventListener('click', doTheMath);
}

const clearDisplay = () => { 
    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        calcDisplay.textContent = '0';
    })
}

clearDisplay();
//TEST CASE
//DESCRIPTION: Get 1 + 2 = 3

//STEP 1: Click on 'button' 1
//EXPCTATION: 1 shows up in 'display'
//ACTUAL: IT WORKS

//STEP 2: Click on 'button' +
//EXPECATION: app 'grabs' 1 and stores it to be concatinated to following 'button push'
//ACTUAL: nothing happens

//STEP 3: Click on 'button' 2
//EXPECTATION: 2 shows up on 'display'
//ACTUAL: '1 2' shows up on display

//STEP 4: Click on 'button' =
//EXPECTATION: 3 shows up on 'display'
//ACTUAL: nothing happens 