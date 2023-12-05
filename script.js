document.querySelector('.yes').addEventListener('click', () => {
    document.querySelector('img').src = 'assests/taunt.gif'
    document.querySelector('h1').innerHTML = 'Get lost, jerk!'
    document.querySelector('h1').style.color = '#000'
})



const noButton = document.querySelector('.no')
noButton.addEventListener('click', () => {
    let randomX = Math.floor(Math.random() * 50) + 30;
    let randomY = Math.floor(Math.random() * 25);
    noButton.style.bottom = `${randomY}vh`
    noButton.style.left = `${randomX}vw`
})

function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}

preload_image('assests/taunt.gif')