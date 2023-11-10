<script lang="ts">
	import type { ProductType } from '$lib/interface/product';
	import Button from '$lib/layouts/Button.svelte';
	import { shoppingCart } from '$lib/store/shopping-cart';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	export let product: Omit<ProductType, 'comments'>;
	export let open = false;
	export let position: 'top-right' | 'center' = 'center';
	let sizeSelected: string | null;

	function getFlyY() {
		const y = {
			center: 100,
			'top-right': -100
		}[position];
		return y;
	}

	function onClose() {
		open = false;
	}

	function addToCart() {
		$shoppingCart = [
			...$shoppingCart,
			{
				name: product.name,
				price: product.price,
				image: product.images[0],
				id: product.id
			}
		];
		onClose();
		sizeSelected = null;
	}
</script>

{#if open}
	<dialog
		open
		id="product-variant"
		class={position}
		in:fly={{ duration: 180, easing: cubicOut, y: getFlyY() }}
		out:fly={{ duration: 180, easing: cubicIn, y: getFlyY() }}
	>
		<img src={product.images[0]} alt={product.name} loading="lazy" />
		<section>
			<p class="title-medium">Seleccione las preferencias de su articulo</p>
			<div id="sizes">
				<p class="label-large">Talla</p>
				{#each product.category.sizes as { name }}
					<button
						class="label-large"
						class:selected={sizeSelected === name}
						on:click={() => (sizeSelected = name)}>{name}</button
					>
				{/each}
			</div>
			<hr />
			<footer>
				<hgroup>
					<p class="title-large green">USD {product.price.toFixed(2)}</p>
					<p class="body-small">Sin comision</p>
				</hgroup>
				<Button on:click={addToCart} disabled={!sizeSelected} icon="add_shopping_cart"
					>Agregar</Button
				>
			</footer>
		</section>
	</dialog>
	<button
		class="backdrop"
		on:click={onClose}
		in:fade={{ duration: 180, easing: cubicOut }}
		out:fade={{ duration: 180, easing: cubicIn }}
	/>
{/if}

<style>
	#product-variant {
		border: var(--border-color);
		overflow: hidden;
		display: grid;
		box-shadow: var(--elevation-5);
	}
	#product-variant.top-right {
		top: 64px;
		right: 16px;
		left: inherit;
		bottom: inherit;
		margin: inherit;
	}
	img {
		height: 100%;
		position: absolute;
		object-fit: cover;
		object-position: top;
	}
	section {
		position: relative;
		z-index: 2;
		background-color: var(--surface-color);
		border-radius: 16px;
		padding: 16px;
		display: grid;
		gap: 16px;
	}
	#sizes {
		display: grid;
		grid-template-columns: repeat(5, 32px);
		justify-content: space-between;
		row-gap: 8px;
		margin-bottom: 8px;
	}
	#sizes p {
		grid-column: 1/-1;
	}
	#sizes button {
		width: 36px;
		height: 36px;
		border: 2px solid var(--primary-color);
		background: none;
		border-radius: 50%;
		transition: 180ms ease;
	}
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.green {
		color: var(--green-color);
	}

	#sizes button.selected {
		background: var(--primary-color);
		color: var(--primary-on-color);
	}
	@media screen and (orientation: landscape) {
		#product-variant {
			width: 524px;
			/* height: 238px; */
			justify-content: flex-end;
			align-content: flex-start;
		}
		img {
			width: 246px;
		}
		section {
			width: 292px;
			height: 100%;
		}
	}

	@media screen and (orientation: portrait) {
		#product-variant {
			width: 262px;
			height: 448px;
			align-content: flex-end;
		}
	}
</style>
