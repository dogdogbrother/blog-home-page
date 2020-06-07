let img = document.querySelector('.img-load');
let couver = document.querySelector('.couver');
let infoBox = document.querySelector('.info-box');

window.onload = () => {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: "fade",
    autoplay: true
  }) 
}