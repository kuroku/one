<script>
	import Header from '$lib/layouts/Header.svelte';
	import Icon from '$lib/layouts/Icon.svelte';
	import Main from '$lib/layouts/Main.svelte';

	import Navigate from '$lib/layouts/Navigate.svelte';
	import ListMessages from './ListMessages.svelte';
	import Messanger from './Messanger.svelte';
</script>

<svelte:head>
	<title>Ordenes</title>
</svelte:head>

<Navigate icon="search" />

<Header title="Pedidos">
	<Icon icon="account_circle" />
</Header>

<Main id="orders">
	<ListMessages />
	<Messanger />
</Main>

<style>
	:global(#orders) {
		display: grid;
		gap: 8px;
	}

	@media screen and (orientation: landscape) {
		:global(#orders) {
			grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
			/* overflow: hidden; */
		}
	}

	@media screen and (orientation: portrait) {
		:global(#orders) {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
		}
	}
</style>
