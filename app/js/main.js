$(document).ready(function() {
		/*______Slider______*/
	$(".slider__block").slick({
		dots: true,
		arrows: false
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

	$(".bx-pager-prev").on("click", function() {
		var bt = $(".bx-prev").click();

		return false
	});
	$(".bx-pager-next").on("click", function() {
		$(".bx-prev").trigger("click");
		
		return false
	});
});