<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	export let icon: string;
</script>

<button
	class="fab material-symbols-outlined"
	on:click
	in:scale={{ duration: 180, easing: cubicOut, delay: 180 }}
	out:scale={{ duration: 180, easing: cubicIn }}
>
	{icon}
</button>

<style>
	.fab {
		border-radius: 16px;
		background-color: var(--primary-color);
		color: var(--primary-on-color);
		border: none;
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}

	@media screen and (orientation: landscape) {
		.fab {
			width: 56px;
			height: 56px;
			place-self: center;
		}
	}

	@media screen and (orientation: portrait) {
		.fab {
			width: 64px;
			height: 64px;
			position: fixed;
			bottom: 88px;
			right: 16px;
			box-shadow: var(--elevation-4);
		}
	}
</style>
