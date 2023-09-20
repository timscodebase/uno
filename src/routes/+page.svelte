<script lang="ts">
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	type PlayersType = Array<Array<string>>

	export let data: PageData = {}
	console.log('Data: ', data)
	const { shuffled_deck } = data

	let number_of_players_input: HTMLInputElement = null
	let players = [] as PlayersType

	onMount(() => {
		number_of_players_input = document.getElementById(
			'number_of_players'
		) as HTMLInputElement
	})

	function deal() {
		const number_of_players = parseInt(number_of_players_input.value)
		for (let i = 0; i < number_of_players; i++) {
			players.push(shuffled_deck.splice(0, 7))
		}
		console.log(players)
	}
</script>

<h1 class="text-6xl font-bold">Hello world!</h1>

<form on:submit={deal}>
	<label for="number_of_players" />
	<input
		type="number"
		name="number_of_players"
		id="number_of_players"
		min="2"
		max="10"
		value="2"
	/>
	<button type="submit" class="outline px-5 py-2">DEAL</button>
</form>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.dark-green);
	}
</style>
