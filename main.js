const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');
let num1; //get 1 inside here
let num2; // get 2 inside here
let operator; // get + in here

function storedValue() {
    const grabValue = calcDisplay.textContent; 
    return grabValue
}

//possible switch case
const doTheMath = (event) => {
    const target = event.target.id;
    num1 = storedValue()
    if (target === '+') {
    
    } else if (target === '-') {
        console.log('subtract')
    } else if (target === '/') {
        console.log('divide')
    } else if (target === '*') {
        console.log('multiply')
    }
}

numbers.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(num1, num2, operator);
    buttonValue = e.target.value;
    let node = document.createTextNode(buttonValue);
    const newValue = calcDisplay.appendChild(node);
});


// function clear(e) {
//     const clear = document.getElementById('clear');
//     let target = e.target.parentElement.previousSibling
//     target.remove();
// }

const fireKeys = document.getElementsByClassName('operator');
for (let keys of fireKeys) {
    keys.addEventListener('click', doTheMath);
}

//TEST CASE
//DESCRIPTION: Get 1 + 2 = 3

//STEP 1: Click on 'button' 1
//EXPCTATION: 1 shows up in 'display'
//ACTUAL: IT WORKS

//STEP 2: Click on 'button +
//EXPECATION: app 'grabs' 1 and stores it to be concatinated to following 'button push'
//ACTUAL: nothing happens

//STEP 3: Click on 'button' 2
//EXPECTATION: 2 shows up on 'display'
//ACTUAL: '1 2' shows up on display

//STEP 4: Click on 'button' =
//EXPECTATION: 3 shows up on 'display'
//ACTUAL: nothing happens 