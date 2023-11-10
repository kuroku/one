<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	export let icon: 'arrow_back' | 'search';
</script>

<nav
	id="navigate"
	in:fade={{ duration: 180, easing: cubicOut, delay: 180 }}
	out:fade={{ duration: 180, easing: cubicIn }}
>
	<Icon {icon} on:click />
</nav>

<style>
	#navigate {
		height: 100%;
		grid-column: 1/2;
		grid-row: 1/2;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		background-color: var(--background-color);
	}
	@media screen and (orientation: portrait) {
		#navigate {
			padding: 0 8px 0px 16px;
		}
	}
</style>
