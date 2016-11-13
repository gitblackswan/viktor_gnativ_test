function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
function run_geo(geo_url){
    $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
        success: function(xml) {$(xml).find('ip').each(function(){
        var city = $(this).find('city').text();
        var region = $(this).find('region').text();
        if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
        $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
    });}});
}
$.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
$('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
$('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");


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

    // menu
    $('.menu_link').on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('.menu_page').addClass('active');
    });
    $('.menu_page .close_menu').on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('.menu_page').removeClass('active');
    });

    // forms
    $('input[name="name"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});
    $('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
    $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

     $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            var track_event=$(this).find('input[name="event"]').val();
            $.ajax({type: type, url: url, data: data,
                success : function(){
                    // $.arcticmodal('close');
                    $('#okgo').arcticmodal();
                    //submit_track_event(track_event);
                }
            }); 
        }else{

            var eror_pop_text = '';

            if ($(this).find('input[name="name"]').hasClass('error-input') && !$(this).find('input[name="phone"]').hasClass('error-input')) {
                eror_pop_text = 'Пожалуйста введите имя';
            } else

            if($(this).find('input[name="phone"]').hasClass('error-input') && !$(this).find('input[name="name"]').hasClass('error-input')){
                eror_pop_text = 'Пожалуйста введите телефон';
            }else

            if($(this).find('input[name="phone"]').hasClass('error-input') && $(this).find('input[name="name"]').hasClass('error-input')){
                eror_pop_text = 'Пожалуйста введите имя и телефон';
            }

            $('#form-error-text').html(eror_pop_text)
            $('#form-error-pop').arcticmodal();
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