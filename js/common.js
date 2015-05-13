function preLoader(){
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow",function(){

	}); 
};

$(document).ready(function() {
	var consultation_slider = new Swiper ('.consultation_slider', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: false,
	    // Navigation arrows
	    nextButton: '.consultation_slider .swiper-button-next',
	    prevButton: '.consultation_slider .swiper-button-prev',
	    
	});
	var reviews_slider = new Swiper ('.reviews_slider', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    // Navigation arrows
	    nextButton: '.reviews_slider .swiper-button-next',
	    prevButton: '.reviews_slider .swiper-button-prev',
	    
	});

	$(".mnu li a").mPageScroll2id();


	$(".sandwich").click(function() {
	  $(".sandwich,.top_mnu").toggleClass("active");
	});

});
$(window).load(function() { 
	preLoader();
});
$(window).resize(function(){
	$(".sandwich,.top_mnu").removeClass("active");
});