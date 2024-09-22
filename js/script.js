$(document).ready(()=>{
  $('#memberResource').slick({
    slidesToShow: 2.89,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    nextArrow: '<button class="slickArrow me-2 p-0"><i class="fa fa-chevron-left"></i></button>',
    prevArrow: '<button class="slickArrow p-0"><i class="fa fa-chevron-right"></i></button>',
    appendArrows: $('#caro2Btn'),
    dots: false,
    pauseOnHover: false,
    responsive: [
    {
        breakpoint: 1030,
        settings: {
            slidesToShow: 2
        }
    }
    ,
     {
        breakpoint: 770,
        settings: {
            slidesToShow: 2
        }
    },
    {
       breakpoint: 650,
       settings: {
           slidesToShow: 1,
           centerMode:true,
       }
   },
   {
      breakpoint: 430,
      settings: {
          slidesToShow: 1,
      }
  },
  {
     breakpoint: 320,
     settings: {
         slidesToShow: 1,
     }
 }
  ]
});
})