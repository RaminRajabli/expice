// slide
  
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Slider in top places section
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 25,
    direction:"vertical",
    loop:true,
    slidesPerGroup:1,
    autoplay: {
        delay:2000,
    },
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next1",
    },

    breakpoints:{
      680: {
        slidesPerView:2,
        direction:"horizontal",
      }
    }
  });