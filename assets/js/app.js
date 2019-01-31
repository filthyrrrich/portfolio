const nav = document.getElementsByClassName('navbar');
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.section');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar ul');
const navbarLinks = document.querySelectorAll('.navbar a');

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
});

window.addEventListener('scroll', () => {
    // Parallax
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
    let transBox = document.getElementById('transBox');
    let pTrans = document.getElementById('p-trans');
    transBox.style.transform ='translateY(-' + (window.pageYOffset * 4 / children.length) + 'px)';
    pTrans.style.transform ='translateY(-' + (window.pageYOffset * 4 / children.length) + 'px)';

    // Active Links
    if(sections[2].getBoundingClientRect().top < 100) {
        changeLinkState(2);
    } else if(sections[1].getBoundingClientRect().top < 100) {
        changeLinkState(1);
    } else if(sections[0].getBoundingClientRect().top < 100) {
        changeLinkState(0);
    } else {
        links.forEach((link) => link.classList.remove('active'));
    }

    // Navbar Appear
    if (window.pageYOffset > window.innerHeight / 1.05){
        nav[0].classList.add('appear');
        document.getElementById('intro').style.display = 'none';
    } else {
        nav[0].classList.remove('appear');
        document.getElementById('intro').style.display = 'initial';

    }

 }, false)


 // Swiper for projects
 const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    depth: 400,
    modifier: 2,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

function changeLinkState(x) {
    links.forEach((link) => link.classList.remove('active'));
    links[x].classList.add('active');
}

// Mobile Nav
navbarToggler.addEventListener('click', navbarTogglerClick);
navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

function navbarTogglerClick() {
  navbarToggler.classList.toggle('open-navbar-toggler');
  navbarMenu.classList.toggle('open');
}
function navbarLinkClick() {
  if(navbarMenu.classList.contains('open')) {
    navbarToggler.click();
  }
}
