$(function() {

	$(".header-slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
		],
	});

 $(".pizza-slider").owlCarousel({
	 items: 3,
	//  autoWidth: true,
	 loop: true,
	 nav: true,
	 navText: [
 "<i class='fa fa-angle-left'></i>",
 "<i class='fa fa-angle-right'></i>"
	 ],
	 responsiveClass: true,
	 responsive: {
		 0:{
			 items: 1,
			 margin: 0,
		 },
		 920:{
			 items: 2,
			 margin: 10,
		 },
		 992:{
			 items: 3,
			 margin: 10,
		 }
	 }
 });

 $(".salad-slider").owlCarousel({
	 items: 4,
	 loop: true,
	 nav: true,
	 navText: [
 "<i class='fa fa-angle-left'></i>",
 "<i class='fa fa-angle-right'></i>"
	 ],
	 responsiveClass: true,
	 responsive: {
		 0:{
			 items: 1,
		 },
		 575:{
			 items:2,
			 margin: 20,
		 },
		 768:{
			 items: 2,
			 margin: 180,
		 },
		 992:{
			 margin: 75,
			 items: 3,
		 },
		 1200:{
			 margin: 30,
			 items: 4,
		 }
	 }
 });
 $(".drinks-slider").owlCarousel({
	 items: 3,
	 loop: true,
	 nav: true,
	 navText: [
 "<i class='fa fa-angle-left'></i>",
 "<i class='fa fa-angle-right'></i>"
	 ],
	 responsiveClass: true,
	 responsive:{
		 0:{
			 items: 1,
		 },
		 768:{
			 items: 2,
			 margin: 100,
		 },
		 992:{
			 margin: 56,
		 },
		 1200:{
			 margin: 115,
		 }
	 }
 });

});
