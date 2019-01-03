// Parallax
window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
    changeLinkState();

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

// Navbar scroll
const nav = document.getElementsByClassName("navbar");
window.onscroll = function sticky() {
    if (window.pageYOffset > window.innerHeight / 1.2){
        nav[0].classList.add("appear");
    } else {
        nav[0].classList.remove("appear");
    }
}

// applys active on links
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.section');
function changeLinkState() {
  let index = sections.length;
  while(--index && window.scrollY + 100 < sections[index].offsetTop);
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}