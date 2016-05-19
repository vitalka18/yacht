$(document).ready(function() {
  $('.js-slideshow').slick({
    dots: true,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });

  $('.js-our-bout-slider').slick({
    dots: false,
    arrows: true,
    speed: 300,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slider-btn slider-prev glyphicon glyphicon-chevron-left"></button>',
    nextArrow: '<button type="button" class="slider-btn slider-next glyphicon glyphicon-chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.js-rent-slider').slick({
    dots: false,
    arrows: true,
    speed: 300,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slider-btn slider-prev glyphicon glyphicon-chevron-left"></button>',
    nextArrow: '<button type="button" class="slider-btn slider-next glyphicon glyphicon-chevron-right"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  $('.js-service-panel').on('click', function(event) {
    event.preventDefault();
    var $that = $(this);
    $that.next('.dropdown-panel').addClass('is-open');
  });

  $('.js-mouse-leave').on('mouseleave', function(event) {
    var $that = $(this);
    $that.removeClass('is-open');
  });
  

  var windowWidth = $(window).width();

  if (windowWidth < 768) {
    sliderInit()
  }
  var $apartmentSliderLink = $('.rent-apartment-wrap .rent-slide-name');
  var $carSliderLink = $('.rent-car-wrap .rent-slide-name');
  setEqualHeight($apartmentSliderLink);
  setEqualHeight($carSliderLink);

  $(window).resize(function() {
    sliderInit();
    $apartmentSliderLink.css('height', 'auto');
    $carSliderLink.css('height', 'auto');
    setEqualHeight($apartmentSliderLink);
    setEqualHeight($carSliderLink);
  });

  $('.js-open-menu').on('click', function(e){
    e.preventDefault();

    var $selector = $(this).parent().next();
    var $that = $(this);
    
    if( !$(this).hasClass('open') ) {
      $selector.slideDown(300);
      $that.addClass('open');
    } else {
      $selector.slideUp(300);
      $that.removeClass('open');
    }
  });
  $('#orderModal').on('show.bs.modal', function (e) {
    $('.js-time').datetimepicker({
      format: 'HH:mm'
    });
    $('.js-date').datetimepicker({
      format: 'DD-MM-YYYY'
    });
  });

  $('.js-scroll').on('click', function(event) {
    var id = $(this).attr('href');
    if( $(id).length ) {
      event.preventDefault();
      var top = $(id).offset().top;
      $("html, body").animate({ scrollTop: top - 30 }, 1000);
    }
  });
  
});//end document ready

function sliderInit() {
  var windowWidth = $(window).width();
  if (windowWidth < 768) {
      if( !$('.services-wrap').hasClass('slick-slider') ) {
        $('.services-wrap').slick({
          dots: false,
          arrows: false,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slider-btn slider-prev glyphicon glyphicon-chevron-left"></button>',
          nextArrow: '<button type="button" class="slider-btn slider-next glyphicon glyphicon-chevron-right"></button>',
        });
      }
    } else {
      if( $('.services-wrap').hasClass('slick-slider') ) {
        $('.services-wrap').slick('unslick');
      }
    }
}

function setEqualHeight(columns){
  var tallestcolumn = 0;
  columns.each(
  function(){
    currentHeight = $(this).height();
    if(currentHeight > tallestcolumn){
      tallestcolumn = currentHeight;
    }
  });
  columns.height(tallestcolumn);
}

var $map = $('#map');//карта
var longVal,latVal,zoomVal,contenteBlock,titleVal;
longVal = $map.attr('data-long');
latVal = $map.attr('data-lidt');
zoomVal = $map.attr('data-zoom')*1;
titleVal = $map.attr('data-title');
function initialize() {
  var myLatlng = new google.maps.LatLng(longVal, latVal);
  var myCenter = new google.maps.LatLng(longVal, latVal);
  var mapOptions = {
    zoom: zoomVal,
    center: myCenter,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: titleVal,
  });
}

google.maps.event.addDomListener(window, 'load', initialize);