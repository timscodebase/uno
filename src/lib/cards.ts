import { uuidv7 } from "uuidv7";
import type { PlayerType, UnoCardType } from './types';

let remain_cards = 112;
const players: PlayerType[] = [];

const firstNameOptions: string[] = [
	'John',
	'Jane',
	'Alex',
	'Emily',
	'Chris',
		'Olivia'
];
const lastNameOptions: string[] = [
	'Smith',
	'Johnson',
	'Williams',
	'Brown',
	'Jones',
	'Miller'
];

function getRandomIndex(array: string[]): number {
	return Math.floor(Math.random() * array.length);
}

function generateFakeName(): string {
	const firstName = firstNameOptions[getRandomIndex(firstNameOptions)];
	const lastName = lastNameOptions[getRandomIndex(lastNameOptions)];

	return `${firstName} ${lastName}`;
}

class Player {
	id: string;
	isHost: boolean;
	isCurrent: boolean;
	cards: UnoCardType[];
	name: string;

	constructor(cards: UnoCardType[]) {
		this.id = uuidv7();
		this.isHost = false;
		this.isCurrent = false;
		this.cards = cards;
		this.name = generateFakeName();
	}

	playCard(card: UnoCardType) {
		console.log('playCard', card);
	}

	drawCard() {
		console.log('drawCard');
	}

	pickCard(card: UnoCardType) {
		console.log('pickCard', card);
	}
}

function shuffle(array: UnoCardType[]) {
	let currentIndex = array.length,
	temporaryValue,
	randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function setupPlayers(
	number_of_players: number,
	shuffled_deck: UnoCardType[]
) {
	for (let i = 0; i < number_of_players; i++) {
		const playerCards = shuffled_deck.splice(0, 7);
		const player = new Player(playerCards);
		remain_cards = remain_cards - playerCards.length;
		players.push(player);
	}
}

export { shuffle };

function deal(number_of_players: number, shuffled_deck: UnoCardType[]) {
		setupPlayers(number_of_players, shuffled_deck);
		remain_cards = shuffled_deck.length;
		return players;
}

export { deal };