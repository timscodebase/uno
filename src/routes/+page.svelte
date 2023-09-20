<script lang="ts">
	import type { PageData } from './$types'

	export const data: PageData = {}
	export const form: FormData = new FormData()
</script>

<h1 class="text-6xl font-bold">Hello world!</h1>

<form action="?/deal" method="POST">
	<label for="number_of_players" />
	<input
		type="number"
		name="number_of_players"
		id="number_of_players"
		min="2"
		max="10"
		value="2"
	/>
	<button class="outline px-5 py-2">DEAL</button>
</form>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.dark-green);
	}
</style>
