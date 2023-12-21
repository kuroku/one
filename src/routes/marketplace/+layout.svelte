<script lang="ts">
	import ShoppingCart from '$lib/components/ShoppingCart.svelte';
	import Nav, { type NavItem } from '$lib/layouts/Nav.svelte';
	const nav: NavItem[] = [
		{
			title: 'inicio',
			icon: 'home',
			href: '/'
		},
		{
			title: 'Pedidos',
			icon: 'shopping_bag',
			href: '/orders'
		}
	];
</script>

<slot />
<Nav {nav} />
<ShoppingCart />
