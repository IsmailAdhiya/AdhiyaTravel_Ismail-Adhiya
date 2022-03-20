var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
breakpoints: {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
},
});