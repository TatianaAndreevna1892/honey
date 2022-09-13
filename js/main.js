$(document).ready(function(){
   $("a.menu__link").click(function(){
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + -100,
      },{
         duration: 1000,
         easing: "swing"
      });
      return false;
   });
  
});
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   menuList.classList.toggle("active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   menuList.classList.remove("active");
}));

$('.prod__slider').slick({
   slidesToShow: 3,
   slidesToScroll: 2,
   autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/prod/right.svg" alt=""></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/prod/leeft.svg" alt=""></button>',
      responsive:[
         {
            breakpoint: 851,
            settings:{
               arrows: false,
               dots: true,
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 601,
            settings:{
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: true,
            }
         }
      ]
});

new Accordion('.accordion-container');

window.onloader = function(){
   let preloder = document.getElementById('.preloder');
   preloder.style.display = 'none';
};

AOS.init();