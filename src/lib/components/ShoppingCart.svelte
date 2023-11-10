<script lang="ts">
	import Aside from '$lib/layouts/Aside.svelte';
	import Button from '$lib/layouts/Button.svelte';
	import Fab from '$lib/layouts/Fab.svelte';
	import Icon from '$lib/layouts/Icon.svelte';
	import Picture from '$lib/layouts/Picture.svelte';
	import { shoppingCart } from '$lib/store/shopping-cart';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const deliveryCost = 1;
	$: subtotalPrice = $shoppingCart.reduce((acc, product) => acc + product.price, 0);
	$: totalPrice = subtotalPrice + deliveryCost;

	let open = false;

	function onOpen() {
		open = true;
	}

	function onClose() {
		open = false;
	}

	function removeToCart(productIndex: number) {
		return () => {
			$shoppingCart = $shoppingCart.filter((_, index) => index !== productIndex);
		};
	}
</script>

{#if !open}
	<Fab icon="shopping_cart" on:click={onOpen} />
{/if}
<Aside id="shopping-cart" position="right" bind:open>
	<header>
		<Icon icon="close" on:click={onClose} />
		<h6 class="title-large">Carrito</h6>
		<menu>
			<Icon icon="share" />
			<Icon icon="clear_all" />
		</menu>
	</header>
	<section>
		{#each $shoppingCart as { name, price, image }, productIndex}
			<article class="product" out:fly={{ duration: 180, easing: cubicOut, y: -10 }}>
				<Picture src={image} alt={name} />
				<hgroup>
					<h6 class="label-large">{name}</h6>
					<p class="label-large green">USD {price.toFixed(2)}</p>
				</hgroup>
				<menu>
					<Icon icon="close" on:click={removeToCart(productIndex)} />
				</menu>
			</article>
		{/each}
	</section>
	<ul>
		<li class="title-medium">
			Sub total ({$shoppingCart.length}) <b class="green">{subtotalPrice.toFixed(2)} USD</b>
		</li>
		<li class="title-medium">Delivery <b class="green">{deliveryCost.toFixed(2)} USD</b></li>
		<li class="title-medium">Total <b class="green">{totalPrice.toFixed(2)} USD</b></li>
	</ul>
	<Button icon="payment">Pagar</Button>
</Aside>

<style>
	:global(#shopping-cart) {
		display: grid;
		padding: 16px 8px;
		grid-template-rows: auto 1fr;
		gap: 16px;
	}
	header {
		display: flex;
		gap: 24px;
		padding: 0 8px;
	}
	menu {
		margin-left: auto;
		display: flex;
		gap: 24px;
	}
	section {
		background-color: var(--surface-color);
		border-radius: 16px;
		padding: 16px;
		overflow-y: auto;
		overflow-x: hidden;
		display: grid;
		align-content: flex-start;
		gap: 16px;
	}
	ul {
		display: grid;
		gap: 16px;
		padding: 0 8px;
	}
	li {
		display: flex;
		justify-content: space-between;
	}
	.green {
		color: var(--green-color);
	}
	:global(#shopping-cart button) {
		place-self: center;
	}
	.product {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: flex-start;
		gap: 16px;
	}
	.product hgroup {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.product hgroup h6 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product :global(picture) {
		width: 64px;
		aspect-ratio: 1/1;
	}

	@media not (hover: none) {
		section {
			padding: 16px 8px 16px 16px;
		}

		section::-webkit-scrollbar-button {
			height: 16px;
		}
	}
</style>
