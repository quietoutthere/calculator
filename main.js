const calc = document.getElementById('main-body');
const calcDisplay = document.getElementById('display');

calc.addEventListener('click', function(e) {
    e.preventDefault();
    buttonValue = e.target.value;
    const node = document.createTextNode(buttonValue);
    calcDisplay.appendChild(node);
    console.log(calcDisplay);
});

