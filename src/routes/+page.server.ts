import type { PageServerLoad } from './$types'
import type { UnoCardType } from '$lib/types'

function shuffle(unoDeck: UnoCardType[]) {
	let currentIndex = unoDeck.length
	let temporaryValue
	let randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = unoDeck[currentIndex]
		unoDeck[currentIndex] = unoDeck[randomIndex]
		unoDeck[randomIndex] = temporaryValue
	}

	return unoDeck
}

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

function generateUnoWildCards(): UnoCardType[] {
	const cards: UnoCardType[] = []

	for (let i = 0; i < 4; i++) {
		cards.push({
			color: 'Wild',
			value: 'Wild',
			flipped: false
		})
		cards.push({
			color: 'Wild',
			value: 'Wild Draw Four',
			flipped: false
		})
	}

	return cards
}

function generateUnoCards(): UnoCardType[] {
	const cards: UnoCardType[] = []

	for (const color in UnoColor) {
		for (const value in UnoValue) {
			cards.push({
				color: UnoColor[color as keyof typeof UnoColor],
				value: UnoValue[value as keyof typeof UnoValue],
				flipped: false
			})
			cards.push({
				color: UnoColor[color as keyof typeof UnoColor],
				value: UnoValue[value as keyof typeof UnoValue],
				flipped: false
			})
		}
	}

	return cards
}

function generate_shuffled_deck(): UnoCardType[] {
	const regularCards = generateUnoCards()
	const wildCards = generateUnoWildCards()

	const unoDeck: UnoCardType[] = regularCards.concat(wildCards)

	return shuffle(unoDeck)
}

export const load: PageServerLoad = () => {
	const shuffled_deck = generate_shuffled_deck()
	console.log('shuffled_deck', shuffled_deck)
	return {
		shuffled_deck
	}
}
