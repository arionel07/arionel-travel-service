import template from './place.html'
import './place.css'
import { getPlaces } from '../../api/travel.service.js'
import { navigate } from '../../router/navigate.js'

export default function Places() {
	const wrapper = document.createElement('div')
	wrapper.innerHTML = template

	const container = wrapper.querySelector('.places')
	const link = wrapper.querySelector('.back')

	link.addEventListener('click', e => {
		e.preventDefault()

		navigate('/')
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

	const loadPlaces = async () => {
		const places = await getPlaces()
		renderPlace(places)
	}

	loadPlaces()

	return wrapper
}
