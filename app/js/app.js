// Import jQuery module (npm i jquery)
import $ from 'jquery'
// import Cookies from 'js-cookie'
// import Select2 from 'select2'
import MicroModal from 'micromodal'
import { Swiper, Pagination, Autoplay, Controller, Navigation } from 'swiper'

window.jQuery = $
window.$ = $

Swiper.use([Pagination, Autoplay, Controller, Navigation])

MicroModal.init();

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	MicroModal.init({
		onShow: (modal) => console.info(`${modal.id} is shown`),
		onClose: (modal) => console.info(`${modal.id} is hidden`),
		openTrigger: 'data-micromodal-open',
		closeTrigger: 'data-micromodal-close',
		awaitOpenAnimation: true,
		// awaitCloseAnimation: true,
		disableFocus: true,
		// onClose: function (modal, element, event) {
		// 	event.preventDefault()
		// 	event.stopPropagation()
		// 	document.body.classList.remove('overflow')
		// }
	})

	const swiper = new Swiper('.offer-slider', {
		direction: 'horizontal',
		loop: true,
		breakpoints: {
			992: {
				direction: 'vertical',
				allowTouchMove: false,
			},
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const swiperFeedback = new Swiper('.swiper-feedback', {
		// slidesPerView: "auto",
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,

		breakpoints: {
			992: {
				slidesPerView: 'auto',
			},
		},
	})

	function burger() {
		const button = document.querySelector('.menu-burger')
		const close = document.querySelector('.menu-mobile__close')
		const menu = document.querySelector('.menu-mobile-wrapper')
		const menuTr = document.querySelector('.menu-mobile')

		button.addEventListener('click', () => {
			menu.classList.add('is-open')
			menuTr.classList.add('is-open')
		})

		close.addEventListener('click', () => {
			menu.classList.remove('is-open')
			menuTr.classList.remove('is-open')
		})
	}

	function quest() {
		let accordions = document.querySelectorAll('.questions-block__header')
		accordions.forEach((acc) =>
			acc.addEventListener('click', () => {
				acc.classList.toggle('is-open')
				let panel = acc.nextElementSibling
				panel.classList.toggle('is-open')
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null
				} else {
					panel.style.maxHeight = panel.scrollHeight + 'px'
				}
			})
		)
	}

	quest()
	burger()
})
