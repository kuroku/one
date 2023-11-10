<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';

	export let id: string;
</script>

<main
	{id}
	in:scale={{ duration: 180, easing: cubicOut, delay: 180, start: 0.9 }}
	out:fade={{ duration: 180, easing: cubicIn }}
>
	<slot />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		/* background-color: red; */
	}

	@media screen and (orientation: landscape) {
		main {
			grid-column: 2/3;
			grid-row: 1/4;
			padding: 64px 8px 8px 8px;
		}
	}
	@media screen and (orientation: portrait) {
		main {
			grid-column: 1/3;
			grid-row: 1/4;
			padding: 64px 8px 80px 8px;
		}
	}

	@media not (hover: none) {
		main {
			padding: 64px 8px 8px 8px;
		}

		main::-webkit-scrollbar-button {
			height: 32px;
		}
	}
</style>
