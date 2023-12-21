<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/layouts/Button.svelte';
	import Header from '$lib/layouts/Header.svelte';
	import Main from '$lib/layouts/Main.svelte';
	import Navigate from '$lib/layouts/Navigate.svelte';
	import type { PageData } from './$types';
	import Section from './Section.svelte';
	import Gallery from './Gallery.svelte';
	import ProductVariants from '$lib/components/ProductVariants.svelte';
	export let data: PageData;
	let showDialog = false;
	function back() {
		goto('/');
	}
	function onOpenDialog() {
		showDialog = true;
	}
</script>

<svelte:head>
	<title>{data.product.name}</title>
</svelte:head>

<Navigate icon="arrow_back" on:click={back} />

<Header title="USD {data.product.price.toFixed(2)}" caption="Sin comision" titleColor="green">
	<Button icon="add_shopping_cart" on:click={onOpenDialog}>Agregar</Button>
</Header>

<Main id="product">
	<Gallery imagenes={data.product.images} productName={data.product.name} />
	<Section product={data.product} ratings={data.ratings} />
</Main>

<ProductVariants product={data.product} bind:open={showDialog} position="top-right" />

<style>
	:global(#product) {
		display: grid;
		gap: 8px;
		align-items: flex-start;
	}

	@media screen and (orientation: landscape) {
		:global(#product) {
			grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
			/* overflow: hidden; */
		}
	}

	@media screen and (orientation: portrait) {
		:global(#product) {
			grid-template-rows: auto 1fr;
		}
	}
</style>
