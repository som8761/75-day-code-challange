const circles = document.querySelectorAll('.circle');
const feed_video = document.querySelector('.feed_video');
const status_holder = document.querySelector('.status_holder');

const images = [
    {img : 'profile_photos/image1.jpg'},
    {img : 'profile_photos/image2.jpg'},
    {img : 'profile_photos/image3.jpg'},
    {img : 'profile_photos/image4.jpg'},
    {img : 'profile_photos/image5.jpg'},
]
circles.forEach((circle, i)=>{
    const {img} = images[i];
    circle.getElementsByTagName('img')[0].src = img;

    circle.getElementsByTagName('img')[0].addEventListener('click',()=> {
        status_holder.style.display = 'block';
        status_holder.getElementsByTagName('img')[0].src = img;
        feed_video.style.display = 'none';

        setTimeout(() => {
            status_holder.style.display = 'none';
            feed_video.style.display = 'block';
            circle.style.border = 'none';
        }, 3000);
    })
})




