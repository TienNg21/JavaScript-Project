const expressionResult = document.querySelector(".expression");
const currentResult = document.querySelector(".curr-res");
const del = document.querySelector("#del");
const ac = document.querySelector("#ac");

const toggleSign = document.querySelector("#toggleSign");

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiple = document.querySelector("#multiple");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");

const ansButton = document.querySelector("#ans");
const dot = document.querySelector("#dot");

const numberButton = document.querySelectorAll(".number");

let expression = "0";
let curr = "0";
let ans = "0";

const updateExpression = function() {
    expressionResult.textContent = expression;
    currentResult.textContent = curr;
}

const clickAC = function() {
    expression = "0";
    curr = "0";
    updateExpression();
}

const clickDel = function() {
    if(String(expression).length === 1 || expression === Number('Infinity')){
        expression = "0";
        calculate();
        return;
    }
    expression = expression.substring(0, expression.length - 1);
    if(expression[expression.length - 1] === '/' || expression[expression.length - 1] === 'x' || expression[expression.length - 1] === '-' || expression[expression.length - 1] === '+') {
        updateExpression();
    }else {
        calculate();
    }
}

const clickToggleSign = function() {
    if(expression === '0' || expression === Number('Infinity')) {
        return;
    }
    if(expression[0] === '-') {
        expression = expression.substring(1);
    }else {
        expression = '-' + expression;
    }
    calculate();
}

const clickNumber = function(number) {
    if(expression === Number('Infinity')) {
        return;
    }
    if(expression.includes('.') && number === '.') {
        return;
    }
    if(number === '/' || number === '*' || number === '-' || number === '+') {
        if(expression[expression.length - 1] === '/' || expression[expression.length - 1] === '*' || expression[expression.length - 1] === '-' || expression[expression.length - 1] === '+') {
            expression = expression.substring(0, expression.length - 1);
        }
        expression += number;
        updateExpression();
        return;
    }else {
        if(expression === '0' && number !== '.'){
            expression = '';
        }
    }
    expression += number;
    calculate();
}
function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

const calculate = function() {
    expression = expression.replaceAll('x','*');
    // console.log(parse(expression));
    curr = parse(expression);
    updateExpression();
}

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', function() {
        clickNumber(numberButton[i].id);
    });
}

const clickEqual = function() {
    if(expression === '0' || expression === Number('Infinity')) {
        return;
    }
    // curr = expression;
    expression = curr;
    ans = curr;
    curr = "0";
    updateExpression();
}

const clickAns = function() {
    if(expression === Number('Infinity')) {
        return;
    }
    if(expression === '0' || expression === 0) {
        expression = ans;
    }else if(expression[expression.length - 1] === '/' || expression[expression.length - 1] === '*' || expression[expression.length - 1] === '-' || expression[expression.length - 1] === '+' || expression.length === 0) {
        expression += ans;
    }else {
        expression += '+' + ans;
    }
    updateExpression();
}

ac.addEventListener('click', clickAC);
del.addEventListener('click', clickDel);
toggleSign.addEventListener('click', clickToggleSign);
equal.addEventListener('click', clickEqual);
ansButton.addEventListener('click', clickAns);