$(document).ready(function() {
    slider1 = $('.slider_companies').bxSlider({
        infiniteLoop: true,
        nextSelector: '#sld2r',
        prevSelector: '#sld2l',
        controls: true,
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