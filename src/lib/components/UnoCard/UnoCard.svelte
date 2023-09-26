<script lang="ts">
	import type { UnoColorType, UnoValueType } from '$lib'

	export let color: UnoColorType
	export let value: UnoValueType
	export let flipped: boolean = false
	export let isWild: boolean = false
</script>

{#if !flipped}
	<div class="card_back">Uno</div>
{:else}
	<div class="card_front">
		<div style="background: {color}">
			<div class="top-left-value">{value}</div>
			<div class="value-icon" />
			<div class="bottom-right-value">{value}</div>
		</div>
	</div>
{/if}

<style>
	/* Adding tailwind classes for being used in styled components */
	@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
