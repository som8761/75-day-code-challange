// taken all the refferences
const buttons = document.querySelectorAll('button');
let input_field  = document.getElementById('input_field');
const backSpaceButton = document.querySelector('.back_space');

let string = '';

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const event = e.target.innerHTML;
        // console.log(e.target.textContent);
        
        if(event === '='){
          calculateResult()
        }
        else if(event === 'C'){
            clearTheInput_field()
        }
        else if(event === 'D'){
            back_space();
        }
        else{
            string +=  event;
            input_field.value = string;
        }
    })


    function clearTheInput_field(){
        string = '';
        input_field.value = string;
    }

    function calculateResult(){
        try{
            string = eval(string);
            input_field.value = string;
           }
           catch{
            input_field.value = 'Error';
        }
    }

    function back_space(){
        string = input_field.value.slice(0,-1); // deleting the values.
        input_field.value = string;
    }
})
