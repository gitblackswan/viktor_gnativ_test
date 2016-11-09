$(document).ready(function() {
	// sliders
    slider1 = $('.slider_companies').bxSlider({
        infiniteLoop: true,
        controls: false,
        pager: false,
        auto: true,
        speed: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            $('.rewievs .slider_companies .item_companies').addClass('fadeouted');
            $('.rewievs .slider_companies .item_companies').removeClass('active');
            $('.rewievs .slider_companies .item_companies[data-sld="' + newIndex + '"]').removeClass('fadeouted');
            $('.rewievs .slider_companies .item_companies[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            $('.rewievs .slider_companies .item_companies').addClass('fadeouted');
            $('.rewievs .slider_companies .item_companies').removeClass('active');
            $('.rewievs .slider_companies .item_companies[data-sld="' + newIndex + '"]').removeClass('fadeouted');
            $('.rewievs .slider_companies .item_companies[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSliderLoad: function() {
            $('.rewievs .slider_companies .item_companies.active.bx-clone').removeClass('active');
            $('.rewievs .slider_companies .item_companies').addClass('fadeouted');
            $('.rewievs .slider_companies .item_companies.active').removeClass('fadeouted');
            $('.rewievs').addClass('loaded-slider');
        }
    });
    slider1.goToSlide(1);
    $('#sld1l').click(function(e) {
        e.preventDefault();
        slider1.goToPrevSlide();
    });
    $('#sld1r').click(function(e) {
        e.preventDefault();
        slider1.goToNextSlide();
    });

    // slider2 = $('.sliders_history').bxSlider({
    //     infiniteLoop: true,
    //     controls: false,
    //     pager: false,
    //     auto: false,
    //     speed: 500,
    //     // slideWidth: 0,
    //     slideMargin: 0,
    //     minSlides: 6,
    //     maxSlides: 6,
    //     moveSlides: 1,
    //     onSlideNext: function($slideElement, oldIndex, newIndex) {
    //         $('.item_history').addClass('fadeouted');
    //         $slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
    //         $('.item_active').removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
    //         $('.item_active').removeClass('item_active').next().addClass('item_active');
    //         $slideElement.next().addClass('item_active');
    //     },
    //     onSlidePrev: function($slideElement, oldIndex, newIndex) {
    //         $('.item_history').addClass('fadeouted');
    //         $slideElement.removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
    //         $('.item_active').removeClass('fadeouted').prev().removeClass('fadeouted').prev().removeClass('fadeouted');
    //         $('.item_active').removeClass('item_active').prev().addClass('item_active');
    //         $slideElement.next().addClass('item_active');
    //     },
    //     onSliderLoad: function() {
    //         $('.item_history').addClass('fadeouted');
    //         $('.item_active').prev().removeClass('fadeouted').next().removeClass('fadeouted').next().removeClass('fadeouted');
    //     }
    // });

    //  $('#sld2l').click(function(e) {
    //     e.preventDefault();
    //     slider2.goToPrevSlide();
    // });
    // $('#sld2r').click(function(e) {
    //     e.preventDefault();
    //     slider2.goToNextSlide();
    // });

    // menu
    $('.menu_link').on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('.menu_page').toggleClass('active');
    });
    $('.menu_page .close_menu').on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('.menu_page').removeClass('active');
    });
});

function stabilize(){

  $('section:not(:hidden)').each(function(index, el) {
  
  var eTop = $(this).offset().top; 
  var posTop = eTop - $(window).scrollTop();

    if(posTop>-$(window).height()/2&&posTop<$(window).height()/2){
      $("html, body").animate({ scrollTop: $(this).offset().top}, 250);
  }

  });

}

$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
  $("html, body").stop();
});

if (isMobile != true) {
  $(window).scroll(function(){

    clearTimeout($.data(this, 'scrollTimer'));
    
    $.data(this, 'scrollTimer',setTimeout(stabilize,1500));

  });
}