import template from './place.html'
import './place.css'
import { getPlaces } from '../../api/travel.service.js'
import { navigate } from '../../router/navigate.js'
import Swiper from 'swiper'
import 'swiper/css'

export default function Places() {
	const wrapper = document.createElement('div')
	wrapper.innerHTML = template

	const container = wrapper.querySelector('.places')
	const link = wrapper.querySelector('.back')
	const categoryButtons = wrapper.querySelectorAll('[data-category]')
	const slider = wrapper.querySelector('.place-categories')

	let isDown = false
	let startX
	let scrollLeft

	slider.addEventListener('mousedown', e => {
		isDown = true
		slider.classList.add('dragging')
		startX = e.pageX - slider.offsetLeft
		scrollLeft = slider.scrollLeft
	})

	slider.addEventListener('mouseleave', () => {
		isDown = false
	})
	slider.addEventListener('mouseup', () => {
		isDown = false
	})
	slider.addEventListener('mousemove', e => {
		if (!isDown) {
			return e.preventDefault()
		}

		const x = e.pageX - slider.offsetLeft
		const walk = (x - startX) * 1.5
		slider.scrollLeft = scrollLeft - walk
	})

	let allPlaces = []
	let activeCategory = 'all'

	link.addEventListener('click', e => {
		e.preventDefault()

		navigate('/')
	})

	categoryButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			activeCategory = btn.dataset.category
			categoryButtons.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			filterAndRender()
		})
	})

	const renderPlace = places => {
		container.innerHTML = places
			.map(
				place =>
					`
				<div class="card" data-id="${place.id}">
					<div class="bg-box">
						<img class="place-img" src="${place.image}" />
						
							<span class="${place.bg}"></span>
						</div>
						<h3 class="place-title">${place.name}</h3>
					<div class="info">
						<span> 
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
								<path d="M25 20 H65 L80 35 V85 H25 Z" fill="none" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
								<line x1="50" y1="20" x2="50" y2="85" stroke="black" stroke-width="8" stroke-linecap="round"/>
								</svg>
							</div> 
							<div class="span-text">
								${place.hotelsCount} hotels
							</div>
						</span>
						<span>
							<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
							<rect x="10" y="20" width="50" height="70" rx="5" ry="5" fill="none" stroke="black" stroke-width="4"/>
							<rect x="30" y="10" width="50" height="70" rx="5" ry="5" fill="none" stroke="black" stroke-width="4" transform="rotate(15 55 45)"/>
							</svg>
						</div> 
						<div class="span-text">
							${place.toursCount} tours
						</div>
						
						</span>
					</div>
				</div>
			`
			)
			.join('')
	}

	function filterAndRender() {
		let filtered = allPlaces

		if (activeCategory !== 'all') {
			filtered = allPlaces.filter(place => place.type === activeCategory)
		}

		renderPlace(filtered)
	}

	const loadPlaces = async () => {
		try {
			allPlaces = await getPlaces()
			filterAndRender()
		} catch (error) {
			container.innerHTML = '<p>Error loading places</p>'
		}
	}

	container.addEventListener('click', e => {
		e.preventDefault()
		const card = e.target.closest('.card')

		if (!card) return

		const id = card.dataset.id
		navigate(`/place?id=${id}`)
	})

	loadPlaces()

	return wrapper
}
