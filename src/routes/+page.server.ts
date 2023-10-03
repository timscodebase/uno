import type { PageServerLoad } from './$types'
import type { UnoCardType } from '$lib/types'
import { shuffle } from '$lib'

const UnoColor = new Map([
	['Red', 'Red'],
	['Yellow', 'Yellow'],
	['Green', 'Green'],
	['Blue', 'Blue']
])

const UnoValue = new Map([
	['Zero', '0'],
	['One', '1'],
	['Two', '2'],
	['Three', '3'],
	['Four', '4'],
	['Five', '5'],
	['Six', '6'],
	['Seven', '7'],
	['Eight', '8'],
	['Nine', '9'],
	['Skip', 'Skip'],
	['Reverse', 'Reverse'],
	['DrawTwo', 'Draw Two']
])

function generateUnoWildCards(): UnoCardType[] {
	const cards: UnoCardType[] = []

	for (let i = 0; i < 2; i++) {
		cards.push({
			color: 'Wild',
			value: 'Wild',
			ifFlipped: false,
			isWild: true
		})
		cards.push({
			color: 'Wild',
			value: 'Wild Draw Four',
			isFlipped: false,
			isWild: true
		})
	}

	return cards
}

function generateUnoCards(): UnoCardType[] {
	const cards: UnoCardType[] = []

	for (const color of UnoColor.keys()) {
		for (const value of UnoValue.keys()) {
			cards.push({
				color: UnoColor.get(color),
				value: UnoValue.get(value),
				isFlipped: false,
				isWild: false
			})
			cards.push({
				color: UnoColor.get(color),
				value: UnoValue.get(value),
				isFlipped: false,
				isWild: false
			})
		}
	}

	return [...cards, ...generateUnoWildCards()]
}

function generate_shuffled_deck(): UnoCardType[] {
	const regularCards = generateUnoCards()
	const wildCards = generateUnoWildCards()
	const unoDeck: UnoCardType[] = regularCards.concat(wildCards)
	unoDeck.forEach((card) => {
		card.flipped = false
	})
	return shuffle(unoDeck)
}

export const load: PageServerLoad = () => {
	const shuffled_deck = generate_shuffled_deck()
	return {
		shuffled_deck
	}
}
