$(document).ready(function(){

	$('.navbar .toggle').click(function(event) {
		$(".navbar .main-menu").slideToggle("400");
	
	});
	$('.main-menu .item-menu').click(function(event) {
		$(this).parent().find(".sub-menu").slideToggle("400");
		$(this).toggleClass("active");
	});
	$('.img-details').zoom();
	new WOW().init();
	window.onscroll = function() {myFunction()};
		var navbar = document.getElementById("header");
		var sticky = navbar.offsetTop;
		var logo = $('.logo');
		var sticknavbar= $('.navbar');
		var animated= $('.animated');
		function myFunction() {
		if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
		logo.addClass('sticky-logo')
		sticknavbar.addClass('sticky-navbar')
		} else {
		navbar.classList.remove("sticky");
		logo.removeClass("sticky-logo");
		sticknavbar.removeClass("sticky-navbar");
		}
		}
});

