import template from './home.html'
import './home.css'
import { navigate } from '../../router/navigate.js'

export default function Home() {
	const wrapper = document.createElement('div')
	wrapper.innerHTML = template

	const link = wrapper.querySelector('.box')

	link.addEventListener('click', e => {
		e.preventDefault()

		navigate('/places')
	})

	return wrapper
}
