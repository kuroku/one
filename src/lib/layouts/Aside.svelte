<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	export let id: string;
	export let position: 'left' | 'right';
	export let open: boolean = false;
	function onClose() {
		open = false;
	}
</script>

{#if open}
	<aside
		{id}
		class={position}
		in:fly={{ duration: 180, easing: cubicOut, x: 272, delay: 180 }}
		out:fly={{ duration: 180, easing: cubicIn, x: 272 }}
	>
		<slot />
	</aside>
	<button
		class="backdrop"
		on:click={onClose}
		in:fade={{ duration: 180, easing: cubicOut }}
		out:fade={{ duration: 180, easing: cubicIn }}
	/>
{/if}

<style>
	aside {
		width: calc(100% - 32px);
		height: 100%;
		max-width: 372px;
		position: fixed;
		top: 0px;
		z-index: 4;
		background: var(--background-color);
		box-shadow: var(--elevation-4);
	}
	.right {
		right: 0px;
		border-radius: 16px 0px 0 16px;
	}
</style>
