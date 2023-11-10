<script lang="ts">
	import type { ProductType } from '$lib/interface/product.ts';
	import Avatar from '$lib/layouts/Avatar.svelte';
	import Button from '$lib/layouts/Button.svelte';
	import Picture from '$lib/layouts/Picture.svelte';
	import ProductVariants from './ProductVariants.svelte';
	export let product: Omit<ProductType, 'comments'>;
	let showVariant = false;

	function openDialogVariant(e: any) {
		e.preventDefault();
		showVariant = true;
	}
</script>

<a class="product" href="/product/{product.name}">
	<header>
		<Avatar src={product.brand.image} alt={product.brand.name} />
		<h2 class="title-medium">{product.name}</h2>
	</header>
	<figure>
		{#each product.images.slice(0, 3) as image}
			<Picture src={image} alt={product.name} />
		{/each}
	</figure>
	<section>
		<p class="body-medium">{product.description}</p>
	</section>
	<footer>
		<hgroup>
			<p class="title-large green">USD {product.price.toFixed(2)}</p>
			<p class="body-small">Sin comision</p>
		</hgroup>
		<Button icon="add_shopping_cart" on:click={openDialogVariant}>Agregar</Button>
	</footer>
</a>
<ProductVariants {product} bind:open={showVariant} />

<style>
	.product {
		background-color: var(--surface-color);
		padding: 16px;
		border-radius: 16px;
		display: grid;
		gap: 8px;
		cursor: pointer;
	}

	header {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	header h2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	figure {
		display: grid;
		width: 100%;
		grid-template-columns: auto auto auto;
		grid-row: auto;
		gap: 8px;
	}

	.product :global(picture) {
		width: 100%;
		aspect-ratio: 3/4;
	}
	.product :global(picture:first-child) {
		grid-column: 1/3;
		grid-row: 1/3;
		height: 100%;
	}

	section {
		display: grid;
		gap: 8px;
	}
	.green {
		color: var(--green-color);
	}

	section p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
