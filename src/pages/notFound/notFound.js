import template from './notFound.html'
import './notFound.css'
import { navigate } from '../../router/navigate.js'

export default function NotFound() {
	const error = document.createElement('div')
	error.innerHTML = template

	const link = error.querySelector('.notfound-link')

	link.addEventListener('click', e => {
		e.preventDefault()
		navigate('/')
	})

	return error
}
