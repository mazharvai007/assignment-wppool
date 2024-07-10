// Sticky nav
const nav = document.querySelector('header.header-area');
window.addEventListener('scroll', function () {
	if (document.documentElement.scrollTop > 20) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
});

// Toggle Nav
const hamburgerNav = document.querySelector('.hamburg-icon');
const closeNav = document.querySelector('.hamburg-close-icon');

hamburgerNav.addEventListener('click', function () {
	const toggleNav = document.querySelector('.toggle-nav');
	toggleNav.style.display = 'block';
});

closeNav.addEventListener('click', function () {
	const toggleNav = document.querySelector('.toggle-nav');
	toggleNav.style.display = 'none';
});

// Scroll to bottom
const gotobottom = document.querySelector('.gotobottom');
gotobottom.addEventListener('click', function () {
	const bottomEl = gotobottom.lastElementChild;

	console.log('clicked');
	bottomEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Swiper Slider
const swiper = new Swiper('.swiper', {
	height: '326px',

	speed: 400,
	effect: 'slide',

	direction: 'horizontal',
	loop: true,

	autoplay: {
		delay: 4000,
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return (
				'Pages <span class="' +
				currentClass +
				'"></span>' +
				' of ' +
				'<span class="' +
				totalClass +
				'"></span>'
			);
		},
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		'@0.75': {
			slidesPerView: 1.5,
		},
		'@1.00': {
			slidesPerView: 2.2,
		},
		'@1.50': {
			slidesPerView: 3.2,
		},
	},
});

// Chart
const ctx = document.getElementById('wppool-chart');

const dataCount = 4;
const labels = dataCount;

new Chart(ctx, {
	type: 'line',
	data: {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'WPPOOl',
				data: [
					{ x: 5, y: 10, xy: 15 },
					{ x: 10, y: 8, xy: 18 },
					{ x: 15, y: 20 },
					{ x: 20, y: 5 },
					{ x: 25, y: 45 },
					{ x: 30, y: 65 },
					{ x: 35, y: 18 },
					{ x: 40, y: 85 },
					{ x: 45, y: 65 },
					{ x: 50, y: 45 },
					{ x: 55, y: 25 },
				],
				fill: false,
				borderColor: '#FC714D',
				backgroundColor: ' rgba(255, 101, 62, .5)',
				hoverBackgroundColor: '#FC714D',
				tension: 0,

				borderJoinStyle: 'round',
				capBezierPoints: false,

				pointBackgroundColor: '#FC714D',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: '#FC714D',
			},
			{
				label: 'Google',
				data: [
					{ x: 8, y: 15 },
					{ x: 16, y: 32 },
					{ x: 12, y: 24 },
					{ x: 52, y: 16 },
					{ x: 50, y: 55 },
					{ x: 60, y: 25 },
					{ x: 70, y: 75 },
					{ x: 45, y: 45 },
					{ x: 90, y: 95 },
					{ x: 100, y: 105 },
					{ x: 84, y: 35 },
				],
				fill: false,
				borderColor: '#615DE3',
				backgroundColor: 'rgba(40, 33, 255, .5)',
				tension: 0,

				pointBackgroundColor: '#615DE3',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: '#615DE3',
			},
			{
				label: 'Microsoft',
				data: [
					{ x: 7, y: 17 },
					{ x: 10, y: 20 },
					{ x: 23, y: 13 },
					{ x: 16, y: 36 },
					{ x: 12, y: 25 },
					{ x: 25, y: 35 },
					{ x: 42, y: 19 },
					{ x: 25, y: 31 },
					{ x: 47, y: 22 },
					{ x: 49, y: 24 },
					{ x: 19, y: 54 },
				],
				fill: false,
				borderColor: '#AFCD80',
				backgroundColor: ' rgba(166, 218, 82,.5)',
				tension: 0,

				pointBackgroundColor: '#AFCD80',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: '#AFCD80',
			},
			{
				label: 'Twitter Index',
				data: [
					{ x: 51, y: 15 },
					{ x: 11, y: 62 },
					{ x: 28, y: 33 },
					{ x: 31, y: 47 },
					{ x: 19, y: 22 },
					{ x: 27, y: 42 },
					{ x: 77, y: 39 },
					{ x: 43, y: 61 },
					{ x: 27, y: 35 },
					{ x: 21, y: 37 },
					{ x: 33, y: 59 },
				],
				fill: false,
				borderColor: '#6F34A1',
				backgroundColor: ' rgba(101, 22, 169,.5)',
				tension: 0,

				pointBackgroundColor: '#6F34A1',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: '#6F34A1',
			},
		],
	},

	options: {
		plugins: {
			legend: {
				labels: {
					usePointStyle: false,
				},
				position: 'bottom',
				maxWidth: 150,
			},
		},

		responsive: true,
		fill: true,
		interaction: {
			mode: 'index',
			intersect: true,
			axis: 'y',
			includeInvisible: true,
		},
		stacked: true,

		scales: {
			y: {
				type: 'linear',
				display: true,
				position: 'left',
			},
		},
	},
});
