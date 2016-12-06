$(document).ready(function() {
		/*______Slider______*/
	$(".slider__block").slick({
		dots: true
	});
	/*_____Выпадающее меню_____*/
	$(".nav__rings").on("click", function() {
		$(".popup").hide();
		$(".rings").stop(false, true).fadeToggle(300);
		return false
	});
	$(".nav__earrings").on("click", function() {
		$(".popup").hide();
		$(".earrings").stop(false, true).fadeToggle(300);
		return false
	});
	/*_____section____*/
	$(".looking__link").on("click", function slide() {
		$(this).addClass("looking__link-active");
		$(this).parent().children(".looking__opened").stop(false, true).slideToggle(300);
		return false
	});

});