import type { PageLoad } from './$types'

export const load = (async () => {
	// Define card colors and values
	enum UnoColor {
		Red = 'Red',
		Yellow = 'Yellow',
		Green = 'Green',
		Blue = 'Blue'
	}

	enum UnoValue {
		Zero = '0',
		One = '1',
		Two = '2',
		Three = '3',
		Four = '4',
		Five = '5',
		Six = '6',
		Seven = '7',
		Eight = '8',
		Nine = '9',
		Skip = 'Skip',
		Reverse = 'Reverse',
		DrawTwo = 'Draw Two'
	}

	// Generate Uno Wild cards
	// There are 4 Wild cards and 4 Wild Draw Four cards
	const generateUnoWildCards = () => {
		const cards = []

		for (let i = 0; i < 4; i++) {
			cards.push({
				color: 'Wild',
				value: 'Wild'
			})
			cards.push({
				color: 'Wild',
				value: 'Wild Draw Four'
			})
		}

		return cards
	}

	// Generate two of each Uno card
	const generateUnoCards = () => {
		const cards = []

		for (const color in UnoColor) {
			for (const value in UnoValue) {
				cards.push({
					color: color,
					value: value
				})
				cards.push({
					color: color,
					value: value
				})
			}
		}

		return cards
	}

	// Example usage:
	const regularCards = generateUnoCards()
	const wildCards = generateUnoWildCards()

	// Combine the two arrays
	const unoDeck = regularCards.concat(wildCards)
	console.log(unoDeck)

	return {
		unoDeck: unoDeck
	}
}) satisfies PageLoad
