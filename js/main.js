(function ($) {
"use strict";

// Pre Loader Js 
$(window).on('load',function() {
	$("#loading").fadeOut(500);
});

// Side Bar Menu Js
$(".info-toggle-btn").on("click", function () {
	$(".mobile-sidebar").addClass("info-opened");
	$(".body-overlay").addClass("opened");
});

$(".sidebar-close-btn").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

// Sidebar Mobile Menu
$('#mobile-menu-active').metisMenu();
$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
	e.preventDefault();
});

// One Page Nav
var top_offset = $('.header-area').height() - 0;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


 // Data-Background Js
 $("[data-background").each(function () {
	$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
});

/* magnificPopup video view Js */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

  
// Client Slider Js 
  $('.testimonial-item-area').owlCarousel({
	loop:true,
	autoplay:false,
	autoplayTimeout:3000,
	smartSpeed:500,
	items:1,
	nav:false,
	dots:false,
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

$('.count').counterUp({
	delay: 100,
	time: 1000
});

new WOW().init();



})(jQuery);