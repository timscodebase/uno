<script lang="ts">
	import { onMount } from 'svelte'
	import type { PageData } from './$types'
	import type { PlayerType } from '$lib'
	import { Button, deal, Logo } from '$lib'

	export let data: PageData
	const { shuffled_deck } = data

	let players = [] as PlayerType[]
	let number_of_players_input: HTMLInputElement

	onMount(() => {
		number_of_players_input = document.getElementById(
			'number_of_players'
		) as HTMLInputElement
	})

	const handleSubmit = (e: Event): PlayerType[] => {
		e.preventDefault()
		const number_of_players = parseInt(number_of_players_input.value)
		players = deal(number_of_players, shuffled_deck)
		console.log(players)
		return players
	}
</script>

<!-- If players array is empty, shoe this -->
{#if players.length !== 0}
	<div class="p-4">
		<div class="flex justify-between">
			<Logo />
			<div class="card_deck">
				<!-- Stack shuffles deck -->
			</div>
		</div>
	</div>
{:else}
	<Logo />
	<form
		class="grid grid-cols-2 items-center gap-4 w-1/3 mt-8"
		on:submit={handleSubmit}
	>
		<label for="number_of_players">Number of players (2-10): </label>
		<input
			class="border-4 px-5 py-2 rounded-full text-center bg-black bg-opacity-25 text-yellow"
			type="number"
			name="number_of_players"
			id="number_of_players"
			min="2"
			max="10"
		/>
		<Button type="submit">DEAL</Button>
	</form>
{/if}

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
