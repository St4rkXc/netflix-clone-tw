let swiperCards = new Swiper(".card-content", {
   loop: true,
   spaceBetween: 32,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
   },

   breakpoints: {
      600: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 3,
      },
      1200: {
         slidesPerView: 4,
      },
      1400: {
         slidesPerView: 5,
      },
   },
});
