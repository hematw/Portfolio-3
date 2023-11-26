let tabHeader = document.querySelector('.tabs-header');
let tabIndicator = document.querySelector('.tab-indicator');
let tabBody = document.querySelector('.tabs-body');

let tabsPane = tabHeader.querySelectorAll('ul li');
let tabBodyContents = tabBody.getElementsByTagName('section');

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener('click', function () {
    tabHeader.getElementsByClassName('active')[0].classList.remove('active');
    tabsPane[i].classList.add('active');
    tabBody.getElementsByClassName('active')[0].classList.remove('active');
    tabBodyContents[i].classList.add('active');
  });
}

var typed = new Typed(".multiple-text", {
  strings: ["Full-Stack Developer", "YouTuber", "UX/UI Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
var typed = new Typed(".multiple-text2", {
  strings: ["Full-Stack Developer", "YouTuber", "UX/UI Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Slider with Swiper.js 
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

document.querySelector('.switcher-btn').onclick = () => {
  document.querySelector('.color-switcher').classList.toggle('active');
}

let themeButtons = document.querySelectorAll('.theme-buttons');
themeButtons.forEach(color => {
  color.addEventListener('click', () => {
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--main-color', dataColor);
  });
});