const tab_links_elms = document.querySelectorAll('.tab_links')
const tab_contents_elm = document.querySelectorAll('.tab_contents');

document.querySelector('#Skills').style.display = 'block';

tab_links_elms.forEach((tab_link)=>{
    tab_link.addEventListener('click',(event)=>{
        const clickedTabText = event.target.textContent;
        // block and none the dispkay of the tab content.
        tab_contents_elm.forEach((tab_content)=>{
            if(clickedTabText === tab_content.id){
                tab_content.style.display = 'block';
            }
            else{
                tab_content.style.display = 'none';
            }
        })
       
        // appear and disappear the red line .
        tab_links_elms.forEach((link)=>{
            if(clickedTabText === link.textContent){
                link.classList.add('active_link')
            }
            else{
                link.classList.remove('active_link')
            }
        })

        
       
    })
    
})



const cross_btn = document.querySelector('.fa-xmark')
const menu_bar = document.querySelector('.fa-bars')
const nav = document.getElementsByTagName('nav')[0]

cross_btn.addEventListener('click',()=>{
    nav.getElementsByTagName('ul')[0].style.right = '-200px'
})
menu_bar.addEventListener('click',()=>{
    nav.getElementsByTagName('ul')[0].style.right = '0px'
})





