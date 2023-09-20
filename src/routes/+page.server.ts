import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async () => {
	return {}
}

export const actions = {
	deal: async ({ request }) => {
		const formData = await request.formData()
		console.log('Form Data: ', formData)

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

		const regularCards = generateUnoCards()
		const wildCards = generateUnoWildCards()
		const unoDeck = regularCards.concat(wildCards)

		function shuffle(): void {
			for (let i = unoDeck.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[unoDeck[i], unoDeck[j]] = [unoDeck[j], unoDeck[i]]
			}
		}

		shuffle()

		return {
			success: true,
			unoDeck
		}
	}
} satisfies Actions
