const submit_button = document.querySelector('.submit_btn');
const feedback = document.querySelector('.feedback');
let attempts_taken = 0;


submit_button.addEventListener('click',guessTheNumber);

const randomNum = Math.floor(Math.random() * 100 + 1);

function guessTheNumber(){
    let user = parseInt(document.getElementById('input_field').value);
    attempts_taken++;

    document.getElementById('input_field').value = '';

    if(user === randomNum){
        feedback.innerHTML = `congratulations! you have guess the same number and you have taken  ${attempts_taken++} attempts for it.`;
        feedback.style.color = 'green';
    }
    else if(user > randomNum){
        feedback.innerHTML = `you have entered the higher value`;
        feedback.style.color = 'red';
    }
    else{
        feedback.innerHTML = `you have entered the lower value`;
        feedback.style.color = 'red';
    }
}