$(document).ready(function() {
	/*Pop-up*/
	$(".popular__item-first").magnificPopup();
	/*_____Выпадающее меню_____*/
	$(".nav__rings").on("click", function() {
		if(!$(".rings").is(':visible')) {
			$(".popup").hide();
			$(".rings").stop(false, true).show();
		} else {
		$(".rings").hide();
	}
		return false
	});
	/**/
	$('.bx-pager-prev').on('click', function(e) {
		$('.bx-prev').trigger('click', true);
	});

	$('.bx-pager-next').on('click', function(e) {
		$('.bx-next').trigger('click', true);
	});
	/*_____popup_______*/
	$(".nav__earrings").on("click", function() {
		if(!$(".earrings").is(':visible')) {
			$(".popup").hide();
			$(".earrings").stop(false, true).show();
		} else {
		$(".earrings").hide();
	}
		return false
	});

/**/
	$(".characteristics__assay-value-link-bottom").on("click", function() {
		$(this).parent().children(".assay__stones-modal").stop(false, true).fadeToggle(300);
		return false
	});
/**/
	$(".stones-modal__tr").on("click", function() {
		$(this).parent().children(".stones-modal__pop-up").slideToggle(100);
		$(this).toggleClass("stones-modal__add");
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
	/*_________Якорь__________*/
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0)
				$('.arrow__button').fadeIn(300);
			else
			$('.arrow__button').fadeOut(300);
		});
	});
	$(".arrow__button").on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false
	});

	/*_______Якорь_______*/
	$(".arrow__button").on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false
	});

	$(".nav__toggle").on("click", function() {
		$(this).parent().children(".nav").stop(false, true).slideToggle(300);
		return false
	});

				/*prod-slider*/
	$('.bxslider').bxSlider({
		pagerSelector: '.bx-pager',
		pagerCustom: '.bx-pager'
	});
});