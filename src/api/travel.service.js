import { places } from './data.js'

// delay time
const delay = (ms = 500) => {
	new Promise(resolve => setTimeout(resolve, ms))
}

//Get All
export const getPlaces = async (filters = {}) => {
	await delay()

	let result = [...places]

	if (filters.type) {
		result = result.filter(r => r.type === filters.type)
	}

	if (filters.country) {
		result = result.filter(r => r.type === filters.country)
	}

	if (filters.priceFrom) {
		result = result.filter(r => r.type === filters.priceFrom)
	}

	if (filters.priceTo) {
		result = result.filter(r => r.type === filters.priceTo)
	}

	return result
}

// Get by id
export const getById = async id => {
	await delay()
	return places.find(place => place.id === id)
}
