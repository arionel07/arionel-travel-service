import template from './placePage.html'
import './placePage.css'
import { navigate } from '../../router/navigate.js'
import { getById } from '../../api/travel.service.js'

export default function placePage() {
	const page = document.createElement('div')
	page.innerHTML = template

	const link = page.querySelector('.back')
	const title = page.querySelector('.page-title')

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

			title.textContent = place.name
		} catch (error) {
			title.textContent = 'Error Loading page'
		}
	}

	loadPage()

	return page
}
