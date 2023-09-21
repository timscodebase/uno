<script lang="ts">
	import type { UnoColorType, UnoValueType } from '$lib'

	export let color: UnoColorType
	export let value: UnoValueType
	export let flipped: boolean = false
</script>

{#if !flipped}
	<div class="card_back" />
{:else}
	<div class="card_back" />
{/if}

<style>
</style>
