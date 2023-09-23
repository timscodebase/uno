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

function deal(number_of_players: number, shuffled_deck: UnoCardType[]) {
	setupPlayers(number_of_players, shuffled_deck)
	console.log('Player Hands: ', players)
	remain_cards = shuffled_deck.length
	console.log('Remain Cards: ', remain_cards)
	return players
}

export default deal
