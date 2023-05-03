$(document).ready(function () {
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
				$('.sidebar-close, .sidebar-overlay, .sidebar__menu_item').click(function() {
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

	// cookie asker
	function setCookie(name, value, days) {
		let expires = "";
		if (days) {
			let date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}
	function getCookie(name) {
		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	function checkCookies() {
		let cookieNote = document.getElementById('cookie__note'); //окно cookie
		let cookieBtnAccept = cookieNote.querySelector('.cookie__accept'); //кнопка согласия
		// Если куки cookies_policy нет или она просрочена, то показываем уведомление
		if (!getCookie('cookies_policy')) {
			cookieNote.classList.add('show'); //класс для показа/скрытия окна куки
		}
		// При клике на кнопку устанавливаем куку cookies_policy на один год
		cookieBtnAccept.addEventListener('click', function () {
			setCookie('cookies_policy', 'true', 365);
			cookieNote.classList.remove('show'); //класс для показа/скрытия окна куки
		});
	}
	checkCookies();
	// end cookie asker

});