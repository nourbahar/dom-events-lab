/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let FirstValue
let SecondValue
let operator
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/


calculator.addEventListener('click', (event) => {
    
    //console.log(event.target.innerText);
  
  
    if (event.target.classList.contains('number')) {
      
    }
  
   else if (event.target.innerText === '*') {
     
    }

   else if (event.target.innerText === '-') {
     

    }
   else if (event.target.innerText === '+') {
     

    }
   else if (event.target.innerText === '=') {
        
    }

  });



calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('C')) {
       
        display.innerText = '0';
        
    }
});
/*-------------------------------- Functions --------------------------------*/


function calculate(operator, FirstValue,SecondValue ) {
    switch(operator) {
        case '+':
            return FirstValue + SecondValue;
        case '-':
            return FirstValue - SecondValue;
        case '*':
            return FirstValue * SecondValue;
        case '/':
            if (FirstValue === 0) {
                return ' '; 
            }
            return FirstValue / SecondValue;
        
    }
}



