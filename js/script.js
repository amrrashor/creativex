//page transition and landing page animation
window.onload = () => {
  //page transition
  const transitionElem = document.querySelector('.transition');
  const links = document.querySelector('a')
  setTimeout(() => {
  transitionElem.classList.remove('is-active')
  }, 500)
  for (let i = 0; i < links.length; i++){
    const link = links[i];
    link.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;
      transitionElem.classList.add('is-active');
      setTimeout(() => {
        window.location.href = target;
      }, 500)
    })
  }
  //animate the landing page
  function animation() {
    const navBar = document.getElementById('navbar');
    const home = document.getElementById('content');
    navBar.classList.remove('animate-hidden');
    navBar.classList.add('animate-show')
    home.classList.remove('animate-hidden');
    home.classList.add('animate-show')
  }
  animation()
}
//toggle nav menu
const itemList = document.getElementById('nav-list');
const menuBtn = document.getElementById('nav-toggle-open');
const closeBtn = document.getElementById('nav-toggle-close');

menuBtn.addEventListener('click', () => {
    itemList.classList.toggle('active');
    menuBtn.classList.toggle('bars-toggle')
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    itemList.classList.toggle('active');
    menuBtn.classList.toggle('bars-toggle');
    closeBtn.style.display = 'none'
})
//change navbar color on scroll and show scroll to top icon
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scroll')
window.onscroll = () => {
    if (window.scrollY > 650) {
      navbar.classList.add('nav-active');
      scrollTop.classList.add('scroll-top-show')
    } else {
      navbar.classList.remove('nav-active');
      scrollTop.classList.remove('scroll-top-show')
    }
}
//initialize first swiper
var swiper = new Swiper('.swiper-container', {
  autoplay: true,
  loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
});
//initialize second swiper
var swiper = new Swiper('.swiper-container2', {
  autoplay: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});
