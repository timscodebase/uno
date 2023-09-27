<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button
	{type}
	class="border-4 px-5 py-2 rounded-full text-center bg-black bg-opacity-25 text-yellow shadow-effect"
>
	<slot />
</button>

<style>
	/* Adding tailwind classes for being used in styled components */
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer utilities {
		/* Apply shadow-effect utility classes */
		.shadow-effect {
			box-shadow: -1px 1px 2px #000000, -3px 3px 2px #000000,
				-5px 5px 2px #000000, -7px 7px 2px #000000, -9px 9px 2px #000000,
				-11px 11px 2px #000000, -13px 13px 2px #000000;
			transition: box-shadow 0.1s;
		}

		.shadow-effect:hover {
			transform: translate(-3px, 3px);
			box-shadow: -1px 1px 2px #000000, -3px 3px 2px #000000,
				-5px 5px 2px #000000, -7px 7px 2px #000000, -9px 9px 2px #000000;
		}
	}
</style>
