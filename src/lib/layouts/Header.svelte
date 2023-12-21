<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<header
	in:fade={{ duration: 180, easing: cubicOut, delay: 180 }}
	out:fade={{ duration: 180, easing: cubicIn }}
>
	<slot />
	{#if $$slots.menu}
		<menu>
			<slot name="menu" />
		</menu>
	{/if}
</header>

<style>
	header {
		width: 100%;
		display: flex;
		height: 64px;
		align-items: center;
		padding: 0 16px;
		grid-row: 1/2;
		grid-column: 2/3;
		position: sticky;
		top: 0px;
		z-index: 3;
		background-color: var(--background-color);
	}
</style>
