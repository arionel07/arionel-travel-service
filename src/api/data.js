export const places = [
	{
		id: '1423',
		name: 'Meona',
		country: 'Italy',
		bg: 'fi fi-it',
		type: 'sea', // mountains | sea | forest
		weather: ['32', 'sunny'],
		price: {
			from: 150,
			to: 350
		},
		hotelsCount: 53,
		toursCount: 3,
		image: new URL('../assets/img/ita.jpg', import.meta.url).href,
		hotels: [
			{
				id: 1,
				image: 'faw',
				overlook: 9.9,
				star: '★★★★★'
			},
			{
				id: 2,
				image: 'faw',
				overlook: 9.0,
				star: '★★★★☆'
			},
			{
				id: 3,
				image: 'faw',
				overlook: 9.1,
				star: '★★★★☆'
			}
		]
	},
	{
		id: '124141',
		name: 'Yaremche',
		country: 'Ukraine',
		bg: 'fi fi-ua',
		type: 'forest',
		weather: ['19', 'rain'],
		price: {
			from: 80,
			to: 240
		},
		hotelsCount: 44,
		toursCount: 5,
		image: new URL('../assets/img/bg.png', import.meta.url).href,
		hotels: [
			{
				id: 1,
				image: 'faw',
				overlook: 9.3,
				star: '★★★★★'
			},
			{
				id: 2,
				image: 'faw',
				overlook: 8.8,
				star: '★★★☆☆'
			},
			{
				id: 3,
				image: 'faw',
				overlook: 9.1,
				star: '★★★★☆'
			}
		]
	},
	{
		id: '15123',
		name: 'Titlis',
		country: 'Switzerland',
		bg: 'fi fi-ch',
		type: 'mountains',
		weather: ['-4', 'snow'],
		price: {
			from: 200,
			to: 500
		},
		hotelsCount: 61,
		toursCount: 6,
		image: new URL('../assets/img/sw.jpg', import.meta.url).href,
		hotels: [
			{
				id: 1,
				image: 'faw',
				overlook: 9.2,
				star: '★★★★☆'
			},
			{
				id: 2,
				image: 'faw',
				overlook: 8.9,
				star: '★★★★☆'
			},
			{
				id: 3,
				image: 'faw',
				overlook: 9.7,
				star: '★★★★★'
			}
		]
	}
]
