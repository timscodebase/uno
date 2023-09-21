<script lang="ts">
	import { H1 } from '$lib'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	type PlayersType = Array<Array<string>>

	// I want to move this logic to a store, or other file, but I'm not sure how to do it
	export let data: PageData = {}
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

<H1>UNO</H1>

<!-- If players array is empty, shoe this -->
{#if players.length === 0}
	<form class="player_form" on:submit={deal}>
		<label for="number_of_players"> Number of players (2-10): </label>
		<input
			class="px-6 py-3 rounded-full text-center"
			type="number"
			name="number_of_players"
			id="number_of_players"
			min="2"
			max="10"
			value="2"
		/>
		<button type="submit" class="outline px-5 py-2">DEAL</button>
	</form>
{:else}
	<p>Play!</p>
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.dark-green);
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.player_form {
		width: 50svw;
		margin-top: 2rem;
	}
</style>
