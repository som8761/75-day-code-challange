const nav_link = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll',()=>{
    sections.forEach((section_elm)=>{
        console.log(window.scrollY);
        if(window.scrollY >= section_elm.offsetTop - section_elm.clientHeight / 2.5){
            console.log(section_elm.offsetTop);
            currentSection = section_elm.id;
        }

    })
    
    
    nav_link.forEach((navLink_elm)=>{
        if(navLink_elm.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLink_elm.classList.add('active');
        }
    })
})

