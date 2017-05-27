$(function() {

	$('body').scrollspy({
			target: '#mainNav',
			offset: 70
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: true,
	});

});
