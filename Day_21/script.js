// first of all amake code ke eta bojhate hobe j se scroll kore sei ection obdi pouche gacge jekhane pouchale nav link er active class ta chnage hobe.

const nav_link = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll',()=>{
    sections.forEach((section_elm)=>{
        console.log(window.scrollY);
        if(window.scrollY >= section_elm.offsetTop - section_elm.clientHeight / 2){
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


// jakhn ami scroll korchi, joto ta scroll kreche tar value and j section a akhn ache cursor ta tar value, dutor value jadi same othoba bashi hoy y acces value tahole currentSection er j value ta seta hoye jabe oi perticular section er id ta ..abar html a j oi section er j id ta thakbe seta hoye jabe.


/*When you scroll the page manually, the script dynamically updates the active class of the navigation links based on the current scroll position. Similarly, when you directly click on a navigation link, the browser handles the scrolling behavior automatically by navigating to the corresponding section specified in the link's href attribute. As a result, the browser takes care of scrolling to the section, and the script then executes to update the active class of the clicked navigation link to indicate the currently viewed section. So, whether you scroll manually or click on a navigation link, the script ensures that the navigation links accurately reflect the active section of the page. */
