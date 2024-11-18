// Hover Eff
const hoverBoxes = document.querySelectorAll('.hov-bx');
hoverBoxes.forEach(hoverBox => {
    let timeoutId;
    hoverBox.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        hoverBox.classList.add("hov-eff");
    });

    hoverBox.addEventListener('mouseleave', function() {
        timeoutId = setTimeout(function() {
            hoverBox.classList.remove("hov-eff");
        }, 1000);
    });
});


// Flip Cards
const cards = document.querySelectorAll('.avai');
cards.forEach((card) => {
    card.addEventListener('click', function () {
        cards.forEach((c) => {
        if (c !== card) {
            c.classList.remove('flip');
        }
        });
        card.classList.toggle('flip');
    });
});


// Nav
(function($) { "use strict";
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

})(jQuery); 


// Nav Option Scroll