const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const feedback = document.querySelector('.feedback');

btn1.addEventListener('click',()=> checkAndUpdateVowels())

function checkAndUpdateVowels(){
    let user = document.getElementById('input_field').value;
    // document.getElementById('input_field').value = '';
    const vowels = /[aeiou]/gi;
    const vowelCheck = user.match(vowels);

    if(user === ''){
        alert('please write something inside the input fiedl.')
    }
    else if(vowelCheck){
        feedback.innerHTML = `There are ${vowelCheck.length} vowles available and total vowels are : ${vowelCheck} `;
        feedback.style.color = 'green'
    }
    else{
        feedback.innerHTML = `sorry there are no vowels available in this text ,They all are consonents.`;
        feedback.style.color = 'red'
        
    }
    inputValidation(user,feedback)
}

function inputValidation(user,feedback){
    const numericRegex = /[0-9]/g;
    if(user.match(numericRegex)){
        feedback.innerHTML = `Please remove numeric values first`
        feedback.style.color = 'red'
    }
}

function clearall(){
    btn2.addEventListener('click',()=>{
        document.getElementById('input_field').value = ''
        feedback.innerHTML = ''
    })
}

clearall()