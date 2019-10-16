let img = document.querySelector('.img-load');
let couver = document.querySelector('.couver');
let infoBox = document.querySelector('.info-box');

img.onload = () => {
    couver.classList.add('left-show');
    infoBox.classList.add('right-show')
}