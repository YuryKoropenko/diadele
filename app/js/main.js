$(document).ready(function() {
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

	$(".characteristics__assay-value-link-bottom").on("click", function() {
		$(this).parent().children(".assay__stones-modal").stop(false, true).fadeToggle(300);
		return false
	});
	$(".stones-modal__tr").hover(function() {
		$(this).parent().children(".stones-modal__pop-up").stop(false, true).show(100);
		$(this).addClass("stones-modal__add");
	}, function() {
		$(this).parent().children(".stones-modal__pop-up").stop(false, true).hide(100);
		$(this).removeClass("stones-modal__add");
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

	$(document).ready(function() {
		$('popular__item').on('click', function(e) { // Кнопка, которая активирует наши модальные окна
		$('.modal-window__wrapper').reveal({ // Пункт, который будет открывать и раскрывать окно
			animation: 'fade', // Анимация появления
			animationspeed: 600, // Скорость анимации
			closeonbackgroundclick: true // Нажатие на фон, чтобы закрыть окно
		});
		return false
		});
	});
			/*prod-slider*/
	$('.bxslider').bxSlider({
		pagerSelector: '.bx-pager',
		pagerCustom: '.bx-pager'
	});
});