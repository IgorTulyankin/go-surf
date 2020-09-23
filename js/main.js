$(function(){
	$('.header__slider').slick({
		infinite: true,
		fade: true, 
		prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrov-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrov-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead'
	});
	
	/*настройка маршрутов на карте*/
	$(".header__slider").on('afterChange', function (){
		let dataId = $('.slick-current').attr("data-slick-index");   
		if (dataId == 2) {
			$(".svg-point__big--west").css("display", 'block');
			$(".svg-point__litle--west").css("display", 'none');
			$(".svg-text__west").css("display", 'block');
			$(".svg-road__west").css("display", 'block');
		}

		else {
			$(".svg-point__big--west").hide();
			$(".svg-point__litle--west").show();
			$(".svg-text__west").hide();
			$(".svg-road__west").hide();
		}

		if (dataId == 1) {
			$(".svg-point__big--south").css("display", 'block');
			$(".svg-point__litle--south").css("display", 'none');
			$(".svg-text__south").css("display", 'block');
			$(".svg-road__south").css("display", 'block');
		}

		else {
			$(".svg-point__big--south").hide();
			$(".svg-point__litle--south").show();
			$(".svg-text__south").hide();
			$(".svg-road__south").hide();
		}
		
		if (dataId == 3) {
			$(".svg-point__big--east").css("display", 'block');
			$(".svg-point__litle--east").css("display", 'none');
			$(".svg-text__east").css("display", 'block');
			$(".svg-road__east").css("display", 'block');
		}

		else {
			$(".svg-point__big--east").hide();
			$(".svg-point__litle--east").show();
			$(".svg-text__east").hide();
			$(".svg-road__east").hide();
		}
		
		if (dataId == 0) {
			$(".svg-point__big--north").css("display", 'block');
			$(".svg-point__litle--north").css("display", 'none');
			$(".svg-text__north").css("display", 'block');
			$(".svg-road__north").css("display", 'block');
		}
		
		else {
			$(".svg-point__big--north").hide();
			$(".svg-point__litle--north").show();
			$(".svg-text__north").hide();
			$(".svg-road__north").hide();
		}
	});	

	$('.slider-dotshead').slick({
		slidesToShow: 4, 
		slidesToScroll: 4, 
		asNavFor: '.header__slider',
		responsive: [
			{
			  breakpoint: 961,
			  settings: "unslick"
			},
		]
	});
	
	$('.surf-slider').slick({
		slidesToShow: 4, 
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrov-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrov-right.svg" alt=""></img>',
		asNavFor: '.slidr-map',
		responsive: [
			{
			  breakpoint: 1210,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
				breakpoint: 900,
				settings: {
				  slidesToShow: 2,
				}
			  },
			  {
				breakpoint: 720,
				settings: {
				slidesToShow: 1,
				centerMode: true,
				}
			  },
			  {
				breakpoint: 426,
				settings: {
				slidesToShow: 1,
				centerMode: false,
				}
			  },
		]
	});

	$('.slidr-map').slick({
		slidesToShow: 8, 
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1103,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 900,
			  settings: {
			  slidesToShow: 2,
			  centerMode: true,
			  }
			},
			{
			  breakpoint: 720,
			  settings: {
			  slidesToShow: 1,
			  centerMode: true,
			  }
			},
		]
	});

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrov-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrov-right.svg" alt=""></img>'
	});

	/*функционал расчета стоимости проживания в отеле*/
	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// формула расчета
	$('.quantity-button').on('click', function(){
		let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests') ;
		$('.summ').html('$' + summ);
	});	
	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests') ;
		$('.summ').html('$' + summ);

	// конструкция для смены + на -
	$('.surfboard-box__circle').on('click', function(){
		$(this).toggleClass('active');
	});	
	// мобильное меню
	$('.menu-btn').on('click', function(){
		$('.menu').toggleClass('active')
	});

	new WOW().init();

});

let d = new Date();
document.querySelector('.header__data-day').innerHTML = d.getDate();
document.querySelector('.header__data-month_and_ears').innerHTML = (d.getMonth()+1) + " | " + d.getFullYear();