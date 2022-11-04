const calcDisplay = document.getElementById('display');
const numbers = document.querySelector('div.numbers');

function grabValues() {
    const display = calcDisplay.textContent;
    console.log(display); 

    return display
}


const doTheMath = (event) => {
    let grabValues = grabValues();
    const target = event.target.id
    if (target === '+') {
        console.log(grabValues + 1)
    } else if (target === '-') {
        console.log('ya bastard')
    } else if (target === '/') {
        console.log('hello there')
    } else if (target === '*') {
        console.log('butss')
    }
}

numbers.addEventListener('click', function(e) {
    e.preventDefault();
    buttonValue = e.target.value;
    let node = document.createTextNode(buttonValue);
    const newValue = calcDisplay.appendChild(node);
});


    

function clear(e) {
    const clear = document.getElementById('clear');
    let target = e.target.nextSibling;
    target.remove();
}

const fireKeys = document.getElementsByClassName('operator');
for (let keys of fireKeys) {
    keys.addEventListener('click', doTheMath);
}

