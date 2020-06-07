// Selectors
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const displaySum = document.querySelector('#display-sum');
const displayTotal = document.querySelector('#display-total');
const ACButton = document.querySelector('#ac');


// Variables for calculation
let numInput = '';
let operatorInput = '';
let numArray = [];
let operatorArray = [];
let result = 0;
displaySum.innerHTML = '';

// On number input, add number to numInput as string
numButtons.forEach(number => {
    number.addEventListener('click', () => {
        numInput += number.innerHTML;
        displaySum.innerHTML += `${number.innerHTML}`;
    })
})

// On operator input, parseFloat(num) and calculate
operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        numArray.push(parseFloat(numInput));
        numInput = 0;
        operatorArray.push(operator.innerHTML);
        displaySum.innerHTML += ` ${operator.innerHTML} `;
        if (numArray.length === 1) {
            result = numArray[0];
        } else if (numArray.length > 1 && operatorArray.length === numArray.length) {
            switch (operatorArray[operatorArray.length-2]) {
                case '+': 
                    result = result + numArray[numArray.length-1];
                    break;
                case '-': 
                    result = result - numArray[numArray.length-1];
                    break;
                case "÷":
                    result = result / numArray[numArray.length-1];
                    break;
                case '×':
                    result = result * numArray[numArray.length-1];
                    break;
                case '=':
                    result = result * 1;
                    displaySum.innerHTML = `${result} ${operator.innerHTML} `;
                    break;
                default: 
                    displayTotal.innerHTML = 'ERROR';
            }
        }
        displayTotal.innerHTML = result;
        console.log(numArray);
        console.log(operatorArray);
    })
})

// Clear input on AC click
ACButton.addEventListener('click', () => {
    result = 0;
    numInput = '';
    numArray = [];
    operatorArray = [];
    displaySum.innerHTML = '';   
    displayTotal.innerHTML = result;
})

// TODO: handle negative number
// TODO: make it work with keyboard types

// // Keyboard event info: https://javascript.info/keyboard-events
// document.addEventListener('keydown', (event) => {
//     // if (event.key == 'z') {
//       console.log(event.key);
//     // }
//   });