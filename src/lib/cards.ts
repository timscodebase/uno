import type { PlayersType, UnoCardType } from './types'

let remain_cards = 112
const players = [] as PlayersType

function setupPlayers(
	number_of_players: number,
	shuffled_deck: UnoCardType[]
) {
	for (let i = 0; i < number_of_players; i++) {
		players.push(shuffled_deck.splice(0, 7))
	}
}

function shuffle(array: UnoCardType[]) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}
export { shuffle }

function deal(number_of_players: number, shuffled_deck: UnoCardType[]) {
	setupPlayers(number_of_players, shuffled_deck)
	console.log('Player Hands: ', players)
	remain_cards = shuffled_deck.length
	console.log('Remain Cards: ', remain_cards)
	return players
}

export { deal }
