/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let FirstValue = null
let SecondValue = null
let operator = null
let result 
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     
    });
  });



  calculator.addEventListener('click', (event) => {
  

    if (event.target.classList.contains('number')) {
      inputNumber(event.target.innerText)
    }
    if (event.target.classList.contains('operator')){
        if(operator===null){
      operator=event.target.innerText
      display.innerText = operator
        }
    }
    if(event.target.classList.contains('equals'))
        {
            calculate()
        }

        if(event.target.classList.contains('clear'))
            {
                clear()
            }
  });
/*-------------------------------- Functions --------------------------------*/

function inputNumber(value){
    if(FirstValue === null)
        { FirstValue=value}
    else if (operator === null)
        {FirstValue+=value}
    else if (SecondValue === null)
        {SecondValue=value}
    else {SecondValue+=value}
display.innerText+=value
}

function calculate() {
    if(FirstValue && SecondValue && operator){
        const num1 = parseFloat(FirstValue)
        const num2 = parseFloat(SecondValue)
     if (operator === '+'){
        result = num1 + num2
     }
     else if (operator === '-'){
        result = num1 - num2
     }
     else if (operator === '*'){
        result = num1 * num2
     }

     else if (operator === '/'){
        result = num1 / num2
     }

display.innerText= result

}
}

function clear(){
    FirstValue= null
    SecondValue= null
    operator= null
    result=null
    display.innerText=''
}



