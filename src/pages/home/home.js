import template from './home.html'
import './home.css'

export default function Home() {
	const wrapper = document.createElement('div')
	wrapper.innerHTML = template

	return wrapper.firstElementChild
}
