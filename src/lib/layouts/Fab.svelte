<script context="module" lang="ts">
	const fabText = writable<string | null>();
	let timeout: NodeJS.Timeout;
	export function fabDialog(text: string) {
		clearTimeout(timeout);
		fabText.set(text);
		timeout = setTimeout(() => {
			fabText.set(null);
		}, 2000);
	}
</script>

<script lang="ts">
	import { backIn, backOut, cubicIn, cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { scale, slide } from 'svelte/transition';
	export let icon: string;
	function closeFabText() {
		$fabText = null;
	}
</script>

<button
	class="fab"
	class:rounded={!!$fabText}
	on:click
	on:click={closeFabText}
	in:scale={{ duration: 180, easing: cubicOut, delay: 180, start: 0.9 }}
	out:scale={{ duration: 180, easing: cubicIn, start: 0.9 }}
>
	<span class="material-symbols-outlined">
		{icon}
	</span>
	{#if $fabText}
		<p
			class="label-large"
			in:slide={{ duration: 360, easing: backOut, axis: 'x' }}
			out:slide={{ duration: 180, easing: backIn, axis: 'x' }}
		>
			{$fabText}
		</p>
	{/if}
</button>

<style>
	.fab {
		border-radius: 16px;
		background-color: var(--primary-color);
		color: var(--primary-on-color);
		border: none;
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 16px 16px 16px 16px;
		transition: 360ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transition-property: padding, border-radius;
	}

	.rounded {
		border-radius: 50px;
		padding: 16px 20px 16px 16px;
		transition: 180ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-property: padding, border-radius;
	}

	p {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media screen and (orientation: landscape) {
		.fab {
			min-width: 56px;
			height: 56px;
			align-self: center;
			margin-left: 12px;
			position: fixed;
			grid-column: 1/2;
			grid-row: 2/3;
		}
	}

	@media screen and (orientation: portrait) {
		.fab {
			min-width: 64px;
			height: 64px;
			position: fixed;
			bottom: 88px;
			right: 16px;
		}
	}
</style>
