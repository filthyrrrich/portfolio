// Parallax
window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
    
 }, false)


 // Swiper for projects
 var swiper = new Swiper('.swiper-container', {
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