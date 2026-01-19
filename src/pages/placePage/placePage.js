import template from './placePage.html'
import './placePage.css'
import { navigate } from '../../router/navigate.js'
import { getById } from '../../api/travel.service.js'

const WEATHER_ICONS = {
	sunny: 'sunny-svgrepo-com.svg',
	cloudy: 'cloud-sun-svgrepo-com.svg',
	rain: 'rain-svgrepo-com.svg',
	snow: 'rain-snow-svgrepo-com.svg'
}

export default function placePage() {
	const page = document.createElement('div')
	page.innerHTML = template

	//up
	const bgImg = page.querySelector('.bg-image')
	const link = page.querySelector('.back')
	const title = page.querySelector('.page-title')
	const desc = page.querySelector('.page-desc')

	//middle
	const weatherText = page.querySelector('.weather-text')
	const weather1 = page.querySelector('.weather-1')
	const weather2 = page.querySelector('.weather-2-img')
	const praise1 = page.querySelector('.praise-1')
	const praise2 = page.querySelector('.praise-2')

	//bottom
	const track = page.querySelector('.slider-track')
	const nextBtn = page.querySelector('.offers-next')
	const card = page.querySelector('.card')

	//slider

	const gap = 342
	const cardWidth = card.offsetWidth + gap

	let position = 0

	nextBtn.addEventListener('click', () => {
		const maxScroll = track.scrollWidth - track.parentElement.offsetWidth

		position += cardWidth

		if (position > maxScroll) {
			position = 0
		}

		track.style.transform = `translateX(-${position}px)`
	})

	//link

	link.addEventListener('click', e => {
		e.preventDefault()

		navigate('/places')
	})

	const params = new URLSearchParams(window.location.search)
	const id = params.get('id')
	console.log(id)

	if (!id) {
		title.textContent = 'Place not found'
		return page
	}

	async function loadPage() {
		try {
			const place = await getById(id)

			//up

			bgImg.style.backgroundImage = `url(${place.image})`
			title.textContent = place.name
			desc.innerHTML = `<span class="${place.bg}"></span><span>${place.country}</span>`

			// middle

			// weather
			const [temperature, condition] = place.weather
			weatherText.textContent = condition
			weather1.textContent = `${temperature}°`
			const icon = WEATHER_ICONS[condition]
			if (icon) {
				weather2.src = new URL(
					`../../assets/icon/weather/${icon}`,
					import.meta.url
				)
			}

			// prise
			const from = place.price.from
			praise1.textContent = `$${from}`

			let color = ''
			if (from <= 100) {
				color = 'green'
			} else if (from <= 150 && from > 101) {
				color = 'yellow'
			} else if (from <= 200 && from > 151) {
				color = 'red'
			}

			praise2.innerHTML = `<div class="${color}"></div>`

			// bottom
		} catch (error) {
			title.textContent = 'Error Loading page'
		}
	}

	loadPage()

	return page
}
