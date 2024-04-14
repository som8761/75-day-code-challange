const on_bulb = document.querySelector('.on_bulb');
const off_bulb = document.querySelector('.off_bulb');
const bulb_image = document.getElementById('bulb_image');

on_bulb.addEventListener('click',()=>{
    bulb_image.setAttribute('src','on.png')
})

off_bulb.addEventListener('click',()=>{
    bulb_image.setAttribute('src','offf.png')
})
