<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let title: string;
	export let caption: string | undefined = undefined;
	export let titleColor: 'primary' | 'green' | undefined = undefined;
</script>

<header
	in:fade={{ duration: 180, easing: cubicOut, delay: 180 }}
	out:fade={{ duration: 180, easing: cubicIn }}
>
	<hgroup>
		<h1 class="title-large {titleColor}">{title}</h1>
		{#if caption}
			<p class="body-small">{caption}</p>
		{/if}
	</hgroup>
	{#if $$slots.default}
		<menu>
			<slot />
		</menu>
	{/if}
</header>

<style>
	header {
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
	h1.green {
		color: var(--green-color);
	}
	menu {
		margin-left: auto;
		display: flex;
		gap: 24px;
	}
</style>
