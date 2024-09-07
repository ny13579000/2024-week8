import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

AOS.init();

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 1.3,
  grabCursor: true,
  rewind: true,
  loop: true,
  spaceBetween: 30,
    navigation: {
      nextEl: ".swiperbutton-next",
      prevEl: ".swiperbutton-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiperbutton-next",
    prevEl: ".swiperbutton-prev",
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper3", {
  
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: { 
    375: {  //当屏幕宽度大于等于320
      slidesPerView: 1,
      spaceBetween: 50
    },
    768: {  //当屏幕宽度大于等于768 
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {  //当屏幕宽度大于等于768 
      slidesPerView: 4,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: ".swiperbutton-next",
    prevEl: ".swiperbutton-prev",
  },
});
      
var swiper = new Swiper(".mySwiper4", {
  
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiperbutton-next",
    prevEl: ".swiperbutton-prev",
  },
  breakpoints: { 
    700: {  //当屏幕宽度大于等于320
      slidesPerView: 1,
      spaceBetween: 50
    },
    768: {  //当屏幕宽度大于等于768 
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {  //当屏幕宽度大于等于1200 
      slidesPerView: 3,
      spaceBetween: 50
    },
    
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});  


var swiper = new Swiper(".mySwiper5", {
  
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: { 
    375: {  //当屏幕宽度大于等于320
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    768: {  //当屏幕宽度大于等于768 
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {  //当屏幕宽度大于等于768 
      slidesPerView: 4,
      spaceBetween: 30
    },
  },
  navigation: {
    nextEl: ".swiperbutton-next",
    prevEl: ".swiperbutton-prev",
  },
});