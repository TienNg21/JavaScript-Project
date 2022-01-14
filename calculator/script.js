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

const ans = document.querySelector("#ans");
const dot = document.querySelector("#dot");

const numberButton = document.querySelectorAll(".number");

let expression = "";
let curr = "0";

const updateExpression = function() {
    expressionResult.textContent = expression;
    currentResult.textContent = curr;
}

const clickAC = function() {
    expression = "";
    curr = 0;
    updateExpression();
}

const clickDel = function() {
    expression = expression.substring(0, expression.length - 1);
    updateExpression();
}

const clickToggleSign = function() {
    if(expression[0] === '-') {
        expression = expression.substring(1);
    }else {
        expression = '-' + expression;
    }
    updateExpression();
}

const clickNumber = function(number) {
    expression += number;
    updateExpression();
}

const calculate = function() {

}

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', function() {
        clickNumber(numberButton[i].id);
    });
}

ac.addEventListener('click', clickAC);
del.addEventListener('click', clickDel);
toggleSign.addEventListener('click', clickToggleSign);
