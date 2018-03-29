$(document).ready(function(){

	$('.navbar .toggle').click(function(event) {
		$(".navbar .main-menu").slideToggle("400");
	
	});
	$('.main-menu .item-menu').click(function(event) {
		$(this).parent().find(".sub-menu").slideToggle("400");
		$(this).toggleClass("active");
	});
})