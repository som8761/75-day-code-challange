const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian)=>{
    accordian.addEventListener('click',()=>{
        const answer = accordian.querySelector('.answer');
        const icon = accordian.querySelector('.icon');

        answer.classList.toggle('active')
        icon.classList.toggle('active')
    })
})

