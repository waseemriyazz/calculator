const total = document.querySelector(".total");
const current = document.querySelector(".current");
const numberKeys = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const allclear = document.querySelector(".allclear");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
let operatorFlag = 0;
let decimalFlag = 0;

numberKeys.forEach(key => key.addEventListener ("click", () => {
let num = key.id;
addToCurrent(num);
}));

clear.addEventListener("click", () => {

    let string = current.textContent;
    let test = string.charAt(string.length -1 );
    if (test==" ")
    {
        current.textContent = current.textContent.slice(0,-3);
        operatorFlag=0;
    }
    else {
        current.textContent = current.textContent.slice(0,-1);
    }

});

allclear.addEventListener("click", () => {
    current.textContent = "";
    total.textContent = "";
    operatorFlag = 0;
});

decimal.addEventListener("click", () => {
    if(decimalFlag == 0){
    decimalFlag++;
    current.textContent = current.textContent + decimal.textContent;
    }
});

equal.addEventListener("click", () => {
    calculate();
});

operators.forEach(key => key.addEventListener ("click", () => {
    
    if(operatorFlag == 0)
    {
        operatorFlag++;
    let operator = key.textContent;
    addOperatorToCurrent(operator);
    }
    else{
    calculate();
    }
    }));

function addToCurrent(num){
    current.textContent = current.textContent + num;
}
function addOperatorToCurrent(operator){
    current.textContent = current.textContent +` ${operator} `;
}
function calculate(){
    let expression = current.textContent.split(" ");
    switch(expression[1]) {
        case '+':
          add(expression[0],expression[2] );
          break;
        case '-':
          sub(expression[0],expression[2] );
          break;
          case '*':
          multi(expression[0],expression[2] );
          break;
        case '/':
          divide(expression[0],expression[2] );
          break;
        
      }
}
function sub(num1, num2)
{
    let num = `${num1-num2}`;
    total.textContent = num;
}
function multi(num1, num2)
{
    let num = `${num1*num2}`;
    total.textContent = num;
}
function divide(num1, num2)
{
    if(num2!=0){
    let num = `${num1/num2}`;
    total.textContent = num;
    }
    else {
        total.textContent = "ERROR!"
    }
}
function add(num1, num2)
{
     let num = Number(num1)+Number(num2);
    total.textContent = num;
}