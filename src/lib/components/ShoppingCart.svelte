<script lang="ts">
	import Aside from '$lib/layouts/Aside.svelte';
	import Button from '$lib/layouts/Button.svelte';
	import Fab from '$lib/layouts/Fab.svelte';
	import Icon from '$lib/layouts/Icon.svelte';

	let open = false;

	function onOpen() {
		open = true;
	}

	function onClose() {
		open = false;
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
			<!-- <Icon icon="shared" /> -->
			<Icon icon="clear_all" />
		</menu>
	</header>
	<section>
		<span>1</span>
	</section>
	<ul>
		<li class="title-medium">Sub total (4) <b>1,200.00 USD</b></li>
		<li class="title-medium">Delivery <b>1,200.00 USD</b></li>
		<li class="title-medium">Total <b>1,200.00 USD</b></li>
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
	}
	section {
		background-color: var(--surface-color);
		border-radius: 16px;
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
	li b {
		color: var(--green-color);
	}
	:global(#shopping-cart button) {
		place-self: center;
	}
</style>
