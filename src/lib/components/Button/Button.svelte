<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button
	{type}
	class="border-4 px-5 py-2 rounded-full text-center bg-black bg-opacity-25 text-yellow"
>
	<slot />
</button>

<style>
</style>
