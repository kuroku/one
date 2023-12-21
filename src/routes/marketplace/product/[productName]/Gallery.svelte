<script lang="ts">
	import Picture from '$lib/layouts/Picture.svelte';

	export let imagenes: string[];
	export let productName: string;
</script>

<figure>
	{#each imagenes as imagen}
		<Picture src={imagen} alt={productName} />
	{/each}
</figure>

<style>
	figure {
		grid-column: 1/-3;
		width: 100%;
		height: 100%;
		border-radius: 16px;
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, auto);
	}
	figure :global(picture) {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		object-fit: cover;
		object-position: top;
	}

	@media screen and (orientation: landscape) {
		figure {
			overflow: hidden;
		}
		figure :global(picture:nth-child(1)) {
			grid-column: 1/3;
			grid-row: 1/3;
		}
	}
	@media screen and (orientation: portrait) {
		figure :global(picture) {
			aspect-ratio: 1/1;
		}
		figure :global(picture:nth-child(1)) {
			grid-column: 1/5;
			aspect-ratio: 16/12;
		}
	}
</style>
