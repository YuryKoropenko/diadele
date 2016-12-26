$(document).ready(function() {
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
	$('.p-slider-pager-prev').on('click', function(e) {
		$('.bx-prev').trigger('click', true);
	});

	$('.p-slider-pager-next').on('click', function(e) {
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
	$('.stones-modal__item-d').on('click', function() {
		$(this).addClass('stones-modal__item-diamond');
		$('.stones-modal__item-l').addClass('stones-modal__item-last');
		$('.stones-modal__item-o').css('display', 'block');
	});
	/*modal*/
	$('.popular__item-first').on('click', function() {
		$('.modal-window__wrapper').addClass('opacity-c');
		$('.podl').addClass('opacity-c');
		$('.modal-window__wrapper').css('z-index', '1000');
		$('.podl').css('z-index', '999');
		$('body').css('overflow', 'hidden');
		return false
	});
	$('.podl').on('click', function(e) {
		if (!$(e.target).closest(".modal-window__bg").length) {
			$('.modal-window__wrapper').removeClass('opacity-c');
			$('.podl').removeClass('opacity-c');
			$('.modal-window__wrapper').css('z-index', '-1000');
			$('.podl').css('z-index', '-999');
			$('body').css('overflow', 'auto');
		}
	});
/**/

	$(".filters__price-sl").slider({
		range: true,
		min: 0,
		max: 1100000,
		values: [ 0, 1100000 ],
		slide: function( event, ui ) {
			$( ".filters__price-sl-first" ).val( ui.values[ 0 ] );
			$( ".filters__price-sl-last" ).val( ui.values[ 1 ] );
		}
	});
	$( ".filters__price-sl-first" ).val( $( ".filters__price-sl" ).slider( "values", 0 ) );
	$( ".filters__price-sl-last" ).val( $( ".filters__price-sl" ).slider( "values", 1 ) );

/**/
/*modal*/
	$('.products-menu__link').on('click', function() {
		$('.modal-window__wrapper').addClass('opacity-c');
		$('.podl').addClass('opacity-c');
		$('.modal-window__wrapper').css('z-index', '1000');
		$('.podl').css('z-index', '999');
		$('body').css('overflow', 'hidden');
		return false
	});
	$('.podl').on('click', function(e) {
		if (!$(e.target).closest(".modal-window__bg").length) {
			$('.modal-window__wrapper').removeClass('opacity-c');
			$('.podl').removeClass('opacity-c');
			$('.modal-window__wrapper').css('z-index', '-1000');
			$('.podl').css('z-index', '-999');
			$('body').css('overflow', 'auto');
		}
	});

/**/
	$('.show-more__button').on('click', function() {
		$('.products-menu-hidden').removeClass('hidden');
		return false
	});
});