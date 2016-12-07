$(document).ready(function() {
		/*______Slider______*/
	$(".slider__block").slick({
		dots: true
	});
	/*_____Выпадающее меню_____*/
	$(".nav__rings").on("click", function() {
		if(!$(".rings").is(':visible')) {
			$(".popup").hide();
			$(".rings").stop(false, true).fadeIn(300);
		} else {
		$(".rings").fadeOut(300);
	}
		return false
	});
	$(".nav__earrings").on("click", function() {
		if(!$(".earrings").is(':visible')) {
			$(".popup").hide();
			$(".earrings").stop(false, true).fadeIn(300);
		} else {
		$(".earrings").fadeOut(300);
	}
		return false
	});
	/*_____section____*/
	$(".looking__link").on("click", function() {
		$(this).toggleClass("looking__link-active")
		$(this).parent().children(".looking__opened").stop(false, true).slideToggle(300);
		return false
	});
	$('.looking__opened-link').on("click", function() {
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(".looking__link").removeClass("looking__link-active");
		$(".looking__opened").slideUp(300);
		$(".looking__link").html(tx);
		$(".looking__link").html(tv);
		return false
	});

	/*_______Якорь_______*/
	$(".arrow__button").on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});