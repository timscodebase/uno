import type { PageServerLoad, Actions } from './$types'

type UnoCardType = {
	color: UnoColorType | WildCardType
	value: UnoValueType | WildCardType
}

type UnoColorType = 'Red' | 'Yellow' | 'Green' | 'Blue'
type UnoValueType =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| 'Skip'
	| 'Reverse'
	| 'Draw Two'
type WildCardType = 'Wild' | 'Wild Draw Four'

function shuffle(unoDeck: UnoCardType[]) {
	let currentIndex = unoDeck.length,
		temporaryValue: UnoCardType,
		randomIndex: number
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

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
			value: 'Wild'
		})
		cards.push({
			color: 'Wild',
			value: 'Wild Draw Four'
		})
	}

	return cards
}

function generateUnoCards(): UnoCardType[] {
	const cards: UnoCardType[] = []

	for (const color in UnoColor) {
		for (const value in UnoValue) {
			cards.push({
				color: UnoColor[color],
				value: UnoValue[value]
			})
			cards.push({
				color: UnoColor[color],
				value: UnoValue[value]
			})
		}
	}

	return cards
}

function generate_shuffled_deck(): UnoCardType[] {
	const regularCards = generateUnoCards()
	const wildCards: WildCardType[] = generateUnoWildCards()

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
