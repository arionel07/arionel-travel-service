export const places = [
	{
		id: '1423',
		name: 'Meona',
		country: 'Italy',
		bg: 'fi fi-it',
		type: 'mountains', // mountains | sea | forest
		weather: 'sunny',
		price: {
			from: 120,
			to: 350
		},
		hotelsCount: 53,
		toursCount: 3,
		image: new URL('../assets/img/ita.jpg', import.meta.url).href
	},
	{
		id: '124141',
		name: 'Yaremche',
		country: 'Ukraine',
		bg: 'fi fi-ua',
		type: 'forest',
		weather: 'cloudy',
		price: {
			from: 80,
			to: 240
		},
		hotelsCount: 44,
		toursCount: 5,
		image: new URL('../assets/img/bg.png', import.meta.url).href
	},
	{
		id: '15123',
		name: 'Titlis',
		country: 'Switzerland',
		bg: 'fi fi-ch',
		type: 'mountains',
		weather: 'snow',
		price: {
			from: 200,
			to: 500
		},
		hotelsCount: 61,
		toursCount: 6,
		image: new URL('../assets/img/sw.jpg', import.meta.url).href
	}
]
