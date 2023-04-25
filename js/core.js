$(document).ready(function () {
	// слaйдер на главной
	$('.slider').slick({
		slidesToScroll:1,
		slidesToShow:1,
		// autoplay: true,
		// appendArrows:'.slider-arrows',
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows:true,
				}
			}
		]
	});

	/*кнопка вверх*/
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	/*мобильное меню*/
	var mobileSidebar = function()
	{
		function obj()
		{
			var self = this;
			self.animSpeed = 400;
			self.init = function()
			{
				self.events();
			},
			self.events = function()
			{
				$('.sidebar-open').click(function() {
					self.open();
				});
				$('.sidebar-close, .sidebar-overlay').click(function() {
					self.close();
				});
			},
			self.open = function()
			{
				$('.sidebar').addClass('sidebar_opened');
				$('.sidebar-overlay').fadeIn(self.animSpeed);
				// pageScroll.hide(1);
			},
			self.close = function()
			{
				$('.sidebar').removeClass('sidebar_opened');
				$('.sidebar-overlay').fadeOut(self.animSpeed);
				// pageScroll.show(0);
			}
		}
		return new obj();
	}();
	mobileSidebar.init();

	/*аккордеон*/
	$(".set > .set__btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.set__content').slideUp(200);
		}
		else{
			$(".set > .set__btn").removeClass("active");
			$(this).addClass("active");
			$('.set__content').slideUp(200);
			$(this).siblings('.set__content').slideDown(200);
		}
		return false
	});
	/*аккордеон внутри аккордеона*/
	$(".inner__set > .inner__set_btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.inner__set_content').slideUp(200);
		}
		else{
			$(".inner__set > .inner__set_btn").removeClass("active");
			$(this).addClass("active");
			$('.inner__set_content').slideUp(200);
			$(this).siblings('.inner__set_content').slideDown(200);
		}
		return false
	});

});