$(function() {

	$(".header-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
		"<i class='fa fa-chevron-left'></i>",
		"<i class='fa fa-chevron-right'></i>"
		],
	});

	$(".video-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		navText: [
		"<i class='fa fa-chevron-left'></i>",
		"<i class='fa fa-chevron-right'></i>"
		],
	});

	$('body').scrollspy({
		target: '#mainNav',
		offset: 70
	});

});
