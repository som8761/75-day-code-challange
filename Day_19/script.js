const main = document.querySelector('.main');
const cursor = document.querySelector('.cursor');

main.addEventListener('mousemove',(e)=>{
    console.log(e.x);

    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
})
