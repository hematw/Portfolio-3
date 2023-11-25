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