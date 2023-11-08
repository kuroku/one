<script lang="ts">
	import type { BrandType } from '$lib/interface/brand.ts';
	import type { ProductType } from '$lib/interface/product.ts';
	import Avatar from '$lib/layouts/Avatar.svelte';
	import Button from '$lib/layouts/Button.svelte';

	export let product: ProductType & { brand: BrandType };
</script>

<a class="product" href="/product/{product.name}">
	<header>
		<h2 class="title-medium">{product.name}</h2>
		<Avatar src={product.brand.image} alt={product.brand.name} />
	</header>
	<figure>
		{#each product.images.slice(0, 3) as image}
			<img src={image} alt={product.name} />
		{/each}
	</figure>
	<section>
		<p class="body-medium">{product.description}</p>
	</section>
	<hr />
	<footer>
		<hgroup>
			<p class="title-large green">USD {product.price.toFixed(2)}</p>
			<p class="body-small">4 Dias y 5 noches</p>
		</hgroup>
		<Button icon="add_shopping_cart">Agregar</Button>
	</footer>
</a>

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

	img {
		width: 100%;
		border-radius: 16px;
		aspect-ratio: 3/4;
		object-fit: cover;
		object-position: top;
	}
	img:first-child {
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
