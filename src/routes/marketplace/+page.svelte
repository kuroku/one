<script lang="ts">
	import Main from '$lib/layouts/Main.svelte';
	import Header from '$lib/layouts/Header.svelte';
	import Product from '$lib/components/Product.svelte';
	import type { PageData } from './$types';
	import Icon from '$lib/layouts/Icon.svelte';
	import Navigate from '$lib/layouts/Navigate.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<Navigate icon="search" />

<Header title="Inicio">
	<Icon icon="account_circle" />
</Header>

<Main id="home">
	{#each { length: 20 } as _}
		{#each data.products as product}
			<Product {product} />
		{/each}
	{/each}
</Main>

<style>
	:global(#home) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 8px;
		align-content: flex-start;
	}
</style>
