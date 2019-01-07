const nav = document.getElementsByClassName("navbar");
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.section');

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
        nav[0].classList.add("appear");
    } else {
        nav[0].classList.remove("appear");
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

// let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
// for (let item of anchorlinks) { // relitere 
//     item.addEventListener('click', (e)=> {
//         let hashval = item.getAttribute('href')
//         let target = document.querySelector(hashval)
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//         history.pushState(null, null, hashval)
//         e.preventDefault()
//     })
// }
// Navbar scroll
// const nav = document.getElementsByClassName("navbar");
// window.onscroll = function sticky() {
//     if (window.pageYOffset > window.innerHeight / 1.2){
//         nav[0].classList.add("appear");
//     } else {
//         nav[0].classList.remove("appear");
//     }
// }

// applys active on links
// const links = document.querySelectorAll('.links');
// const sections = document.querySelectorAll('.section');
