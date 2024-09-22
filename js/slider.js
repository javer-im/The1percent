
$(document).ready(()=>{
    $('#allEveCaro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: true,
      nextArrow: '<button class="slickArrow me-2"><i class="fa fa-chevron-left"></i></button>',
      prevArrow: '<button class="slickArrow"><i class="fa fa-chevron-right"></i></button>',
      appendArrows: $('#caro2Btn'),
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1
          }
        },
      ]
  });
})

$(document).ready(()=>{
  $('#upComeCaro').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    nextArrow: '<button class="slickArrow me-2"><i class="fa fa-chevron-left"></i></button>',
    prevArrow: '<button class="slickArrow"><i class="fa fa-chevron-right"></i></button>',
    appendArrows: $('#car3Btn'),
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      },
    ]
});
})