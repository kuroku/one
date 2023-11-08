<script lang="ts">
	import Nav, { type NavItem } from '$lib/layouts/Nav.svelte';
	import OneUi from '$lib/layouts/OneUi.svelte';
	const nav: NavItem[] = [
		{
			title: 'inicio',
			icon: 'home',
			href: '/'
		},
		{
			title: 'Carrito',
			icon: 'shopping_cart',
			href: '/shopping_cart'
		},
		{
			title: 'Pedidos',
			icon: 'shopping_bag',
			href: '/orders'
		}
	];
</script>

<OneUi>
	<slot />
	<Nav {nav} />
</OneUi>
