<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/layouts/Button.svelte';
	import Header from '$lib/layouts/Header.svelte';
	import Main from '$lib/layouts/Main.svelte';
	import Navigate from '$lib/layouts/Navigate.svelte';
	import type { PageData } from './$types';
	import Section from './Section.svelte';
	import Pictures from './Pictures.svelte';
	export let data: PageData;
	function back() {
		goto('/');
	}
</script>

<svelte:head>
	<title>{data.product.name}</title>
</svelte:head>

<Navigate icon="arrow_back" on:click={back} />

<Header title="USD {data.product.price.toFixed(2)}" caption="4 Dias y 5 noches" titleColor="green">
	<Button icon="add_shopping_cart">Agregar</Button>
</Header>

<Main id="product">
	<Pictures imagenes={data.product.images} productName={data.product.name} />
	<Section product={data.product} ratings={data.ratings} />
</Main>

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
