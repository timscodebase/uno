<script lang="ts">
	import type { PageLoad } from './$types'
	import { onMount } from 'svelte'
	export let data: PageData

	const { unoDeck } = data

	// Get the number of players from the form
	let number_of_players_input: HTMLInputElement

	onMount(() => {
		number_of_players_input = document.querySelector(
			'input#number_of_players'
		) as HTMLInputElement
		number_of_players_input.focus()
	})

	function get_number_of_players(): number {
		return parseInt(number_of_players_input.value)
	}

	// Shuffle the Uno Deck
	function shuffle(): void {
		for (let i = unoDeck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[unoDeck[i], unoDeck[j]] = [unoDeck[j], unoDeck[i]]
		}
	}

	shuffle()
	console.log('unoDeck: ', unoDeck)

	function deal(): void {
		const number_of_players = get_number_of_players()
		// const cards_per_player = Math.floor(unoDeck.length / number_of_players)
		const cards_per_player = 7
		const cards_in_play = number_of_players * cards_per_player
		const remainder = unoDeck.length % cards_in_play

		const players = []
		for (let i = 0; i < number_of_players; i++) {
			const player = []
			for (let j = 0; j < cards_per_player; j++) {
				player.push(unoDeck.pop())
			}
			players.push(player)
		}

		// Deal the remainder
		for (let i = 0; i < remainder; i++) {
			players[i].push(unoDeck.pop())
		}

		console.log(players)
	}
</script>

<form method="POST" on:submit|preventDefault={deal}>
	<div>
		<label for="number_of_players" />
		<input
			type="number"
			name="number_of_players"
			id="number_of_players"
			min="2"
			max="10"
			value="2"
		/>
		<button type="submit">Deal</button>
	</div>
</form>

<style>
</style>
