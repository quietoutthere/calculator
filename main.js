let num1; 
let num2; 
let num3;
let num4;
let operator;
let operator2;
let operator3;
let operator4; 

const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');
numbers.addEventListener('click', (e) => {
    e.preventDefault();
    buttonValue = e.target.value;
    calcDisplay.innerText = buttonValue;
    if (!operator && !num1) {
        num1 = buttonValue;
    } else if (num1 >= 1 && !operator) {
        num1 = num1 + buttonValue;
        calcDisplay.textContent = num1;
    } else if (!!operator && !!operator2 && num1 >=1 && num2>=1 && num3>=1) {
        num3 = num3 + buttonValue;
        calcDisplay.textContent = num3;
    }  else if(!!operator && !!operator2 && num1 >=1 && num2>=1) {
        num3 = buttonValue;
        calcDisplay.textContent = num3;
    } else if (!!operator && num1 >= 1 && num2 >= 1) {
        num2 = num2 + buttonValue;
        calcDisplay.textContent = num2;
    } else if (!!operator && num1 >= 1) {
        num2 = buttonValue;
        calcDisplay.textContent = num2;
    } 
    // console.log('calcDisplay:', calcDisplay.textContent)
    // console.log('buttonValue:', buttonValue)
    // console.log('num1:', num1);
    // console.log('num2:', num2);
    // console.log('num3:', num3);
    // console.log('operator:', operator);
    // console.log('operator2:', operator2);
    // console.log('operator3:', operator3);
    // console.log('operator4:', operator4);
    // console.log(''); 
    console.log(chooseOperator)
});

const chooseOperator = (event) => {
    const target = event.target.id;
    if (!operator) {
        operator = target;
    } else if ((!!operator) && (!!operator2)) {
        operator3 = target;
    } else if (!!operator) {
        operator2 = target;
    }
        console.log(target)
}

function storedValue() {
    const grabValue = calcDisplay.textContent; 
    return parseFloat(grabValue);
}

const equalSign = document.getElementById('=');
equalSign.addEventListener('click', () => {
    calcDisplay.textContent = parseInt(num1) + parseInt(num2) + parseInt(num3);
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
        operator = undefined;
    })
}

clearDisplay();

//Test Case 
//Description: get num3 to concatinate

//Step 1: user presses 111
//Expected: 111 shows up on display
//Actual: IT WORKS

//Step 3: user presses +
//Expected: + shows up in operator 
//Actual: IT WORKS


//Step 2: user presses 222
//Expected: 222 shows up on display
//Actual: IT WORKS

//Step 4: user presses +
//Expected: + shows up in operator2 
//Actual: IT WORKS


//Step 5: user presses 333
//Expected: 333 shows up on display
//Actual: only 3 shows up on display 

//Step 6: user presses equal sign
//Expected: 666 shows up on screen
//Actual: 333 shows up